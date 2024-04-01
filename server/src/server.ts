/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import {
	createConnection,
	TextDocuments,
	TextDocumentSyncKind,
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
	TextEdit,
	SemanticTokensRequest,
	SemanticTokensParams,
	SemanticTokens,
	SemanticTokensPartialResult,
	CancellationToken,
	ResultProgressReporter,
	WorkDoneProgressReporter,
	SemanticTokensDelta,
	SemanticTokensRangeParams,
	ErrorCodes,
	TextDocumentsConfiguration,
	TextDocumentContentChangeEvent,
	SemanticTokensBuilder,
	SemanticTokensDeltaRequest,
	SemanticTokensDeltaParams,
	LSPErrorCodes
} from 'vscode-languageserver/node';
import {
	TextDocument
} from 'vscode-languageserver-textdocument'

import { DocumentInfo } from './DocumentInfo';
import { 
	CallType,
	SemanticLegend
} from './CallSymbol';
/*
class CancellationError extends Error {
	constructor() {
		super("Canceled");
		this.name = this.message;
	}
}
*/
// Create a connection for the server. The connection uses Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. The text document manager
// supports full document sync only
// There is probably a much cleaner way to hook up the changes handler, but I am too dumb to know how.
/*
let documentConfig = Object.create(TextDocument);
documentConfig.update = onChangeHandler;
let documents: TextDocuments<TextDocument> = new TextDocuments<TextDocument>(documentConfig);


function onChangeHandler(document: TextDocument, changes: TextDocumentContentChangeEvent[], version: number): TextDocument {
	let doc = documentInfoCache.get(document.uri);
	if(doc) {
		console.log("DID CHANGE");
		//doc.editSemanticTokens(changes);
	}

	return TextDocument.update(document, changes, version);
}
*/
let documents: TextDocuments<TextDocument> = new TextDocuments<TextDocument>(TextDocument);


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
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that the server supports code completion
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: ['$', '#', '.']
			},
			//documentSymbolProvider: true,
			semanticTokensProvider: {
				legend: SemanticLegend,
				range: false,
				full: {
					delta: false
				}
			},
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


connection.languages.semanticTokens.on(SemanticRequestHandler);

function SemanticRequestHandler(
	params: SemanticTokensParams,
	) : SemanticTokens | ResponseError {

	//https://github.com/flix/vscode-flix/issues/122
	//https://github.com/microsoft/vscode-languageserver-node/blob/301224db3cd88571d51971ac512b3031b91fb07b/testbed/server/src/server.ts#L662
	//https://github.com/dotnet/vscode-csharp/blob/main/src/features/semanticTokensProvider.ts
	//https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#custom-textmate-scope-mappings
	//https://github.com/microsoft/vscode/issues/86415
	//console.log("semantic request " + params.textDocument.uri);

	const doc = documentInfoCache.get(params.textDocument.uri);
	if(!doc)
		return new ResponseError(ErrorCodes.InternalError, "Document not found", undefined);

	if(doc.parseVersion < doc.document.version)
	{
		//CancelationError seems to be only available in the client LSP which is dumb
		//becasue this is a perfectly good response type for the server, that simplifies
		//the SemanticToken management to an insane degree when your parser runs in the background
		return new ResponseError(LSPErrorCodes.ServerCancelled, "Canceled", undefined);
	}
	
	return doc.semanticTokens;
}



// The example settings
interface VelocityLspSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: VelocityLspSettings = { maxNumberOfProblems: 1000 };
let globalSettings: VelocityLspSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<VelocityLspSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <VelocityLspSettings>(
			(change.settings.languageServerVelocity || defaultSettings)
		);
	}

	// Revalidate all open text documents
	//documents.all().forEach(validateTextDocument);
});

/*
function getDocumentSettings(resource: string): Thenable<VelocityLspSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerVelocity'
		});
		documentSettings.set(resource, result);
	}
	return result;
}*/

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
		info.scheduleParseDocument(onParseFinished);
});

function onParseFinished() {
	connection.languages.semanticTokens.refresh();
}


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
			const keywords = keywordHelps.keys();

			var directives : CompletionItem[] = [];
			doc.macroCalls.forEach( s => {
				directives.push({
					label: s.name,
					kind: CompletionItemKind.Method
				})
			});

			//directives.push
			for (let k of keywords) {
				directives.push({
					label: k,
					kind: CompletionItemKind.Keyword
				});
			}

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

const keywordHelps = new Map<string, string>([
	["break", "stop looping in a foreach from within your template"],
	["define", "assign a block of VTL to a reference"],
	["else", "catch all block of an #if conditional"],
	["elseif", "another branch of an #if conditional"],
	["end", "end of a block"],
	["foreach", "loop a block of VTL according to a collection or range"],
	["if", "conditionally render a block of VTL"],
	["include", "add here the content of another file without parsing it"],
	["macro", "define a new custom directive"],
	["parse", "render the content of another template here"],
	["stop", "stop rendering this template immediatly"],
]);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.kind === CompletionItemKind.Keyword) {
			
			item.detail = 'Keyword';
			const help = keywordHelps.get(item.label);
			if(help) {
				item.documentation = help
			}
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
		return symbol.instances.map(inst => {
			return {
				uri: params.textDocument.uri,
				range: inst
			};
		});

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
		return new ResponseError(ErrorCodes.InvalidParams, "Invalid symbol name");

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


// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
