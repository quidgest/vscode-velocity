/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import {
	createConnection,
	TextDocuments,
	TextDocument,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	CompletionParams,
	Range,
	Position,
	Location,
	ReferenceParams,
	ResponseError,
	TextEdit
} from 'vscode-languageserver';
import { DocumentInfo } from './DocumentInfo';
import { CallType } from './CallSymbol';

// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
let documents: TextDocuments = new TextDocuments();

let documentInfoCache = new Map<string, DocumentInfo>();

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we will fall back using global settings
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	return {
		capabilities: {
			textDocumentSync: documents.syncKind,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: ['$', '#', '.']
			},
			//documentSymbolProvider: true,
			referencesProvider: true,
			definitionProvider: true,
			foldingRangeProvider: true,
			renameProvider: true
		}
	};
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			//connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	//documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
	documentInfoCache.delete(e.document.uri);
	connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
});

documents.onDidOpen(e => {
	//console.log("onDidOpen", e.document.uri);
	let info = new DocumentInfo(e.document);
	let uri = e.document.uri;
	info.onError = (errorList) => {
		connection.sendDiagnostics({ uri: uri, diagnostics: errorList });
	};	
	documentInfoCache.set(e.document.uri, info);
	info.parseDocument();
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	//console.log("onDidChangeContent", change.document.uri);
	const info = documentInfoCache.get(change.document.uri);
	if(info)
		info.scheduleParseDocument();
});


connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	//connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_completionParams: CompletionParams): CompletionItem[] | null => {

		let characterPressed = _completionParams.context!.triggerCharacter;
		if(!characterPressed)
			return [];

		let doc = documentInfoCache.get(_completionParams.textDocument.uri);
		if(!doc)
			return [];

		//connection.console.log('onCompletion: ' + characterPressed);
		if(characterPressed === ".")
		{
			const ixEnd = _completionParams.position.character;
			//find out the previous $ character
			let textline = doc.document.getText({start: { 
				line: _completionParams.position.line,
				character: 0
				},
				end: {
					line: _completionParams.position.line,
					character: ixEnd
				}
			});
			let ixSharp = -1;
			for (let c = ixEnd; c >= 0; c--) {
				if(textline[c] == '$') {
					ixSharp = c;
					break;
				}
			}
			if(ixSharp != -1)
			{
				//console.log('dotcompletion' , textline.substring(ixSharp, ixEnd));

				let ret : CompletionItem[] = [];
				doc.methodCalls.forEach( s => {
					ret.push({
						label: s.name,
						kind: (s.type === CallType.Property ? CompletionItemKind.Field : CompletionItemKind.Method)
					})
				})
				return ret;
			}
		}
		if(characterPressed === "#")
		{
			const keywords = ["if","while","for","foreach","parse","include","elseif","else","define","macro","end","stop","break"];

			var directives : CompletionItem[] = [];
			doc.macroCalls.forEach( s => {
				directives.push({
					label: s.name,
					kind: CompletionItemKind.Method
				})
			});

			keywords.forEach( k => {
				directives.push({
					label: k,
					kind: CompletionItemKind.Keyword
				})
			});

			return directives;
		}
		if(characterPressed === "$")
		{
			let ret : CompletionItem[] = [];
			doc.symbols.forEach( s => {
				ret.push({
					label: s.name,
					kind: CompletionItemKind.Variable
				})
			})
			return ret;
		}

		//return [];
		return null;
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.kind === CompletionItemKind.Keyword) {
			item.detail = 'Keyword';
			item.documentation = 'This is a velocity keyword';
		}
		return item;
	}
);


/**
 * Handler for find all references
 */
connection.onReferences(
	(params) => {

		//console.log('onrefrences');

		//get the active document
		let doc = documentInfoCache.get(params.textDocument.uri);
		if(!doc)
			return [];

		// find the token at the requested position
		var symbol = doc.getSymbolAt(params.position);
		if(!symbol)
			return [];

		//find all other references to this symbol
		let res = new Array<Location>();
		for (let ix = 0; ix < symbol.instances.length; ix++) {
			res.push({
				uri: params.textDocument.uri,
				range: symbol.instances[ix]
			});
		}

		return res;
	}
);

/**
 * Handler for go to definition
 */
connection.onDefinition((params) => {
	//console.log('onDefinition');

	//get the active document
	let doc = documentInfoCache.get(params.textDocument.uri);
	if(!doc)
		return null;
		
	// find the token at the requested position
	var symbol = doc.getSymbolAt(params.position);
	if(!symbol)
		return null;

	// naive implementation. Assumes declaration is first occurence of symbol
	if(symbol.instances.length > 0)
		return {
			uri: params.textDocument.uri,
			range: symbol.instances[0]
		};

	return null;
});

/**
 * Handler for renames
 */
connection.onRenameRequest(params => {
	let doc = documentInfoCache.get(params.textDocument.uri);
	if(!doc)
		return null;

	//validate new name is a correct Id
	if(! /^[_a-zA-Z][_a-zA-Z0-9]*$/.test(params.newName))
		return new ResponseError(1, "Invalid symbol name");

	// find the token at the requested position
	var symbol = doc.getSymbolAt(params.position);
	if(!symbol)
		return null;

	var edits: TextEdit[] = [];
	for (let ix = 0; ix < symbol.instances.length; ix++) {
		edits.push({
			range: symbol.instances[ix],
			newText: params.newName
		});
	}

	return {
		changes: {
			[params.textDocument.uri] : edits
		}
	};
	
});

/**
 * Handler for folding ranges
 */
connection.onFoldingRanges((params) => {
	//console.log('onFoldingRanges');
	//get the active document
	let doc = documentInfoCache.get(params.textDocument.uri);
	if(!doc)
		return null;
	//return its foldings
	//console.log('foldings', doc.foldings.length);
	return doc.foldings;
});

/*
connection.onDidOpenTextDocument((params) => {
	// A text document got opened in VSCode.
	// params.textDocument.uri uniquely identifies the document. For documents store on disk this is a file URI.
	// params.textDocument.text the initial full content of the document.
	connection.console.log(`${params.textDocument.uri} opened.`);
});
connection.onDidChangeTextDocument((params) => {
	// The content of a text document did change in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	// params.contentChanges describe the content changes to the document.
	connection.console.log(`${params.textDocument.uri} changed: ${JSON.stringify(params.contentChanges)}`);
});
connection.onDidCloseTextDocument((params) => {
	// A text document got closed in VSCode.
	// params.textDocument.uri uniquely identifies the document.
	connection.console.log(`${params.textDocument.uri} closed.`);
});
*/

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
