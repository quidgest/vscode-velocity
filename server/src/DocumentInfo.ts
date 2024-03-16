/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import {
	Diagnostic,
	Position,
	FoldingRange,
	SemanticTokens,
	TextDocumentContentChangeEvent
} from 'vscode-languageserver/node';
import {
	TextDocument
} from 'vscode-languageserver-textdocument'
import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { VelocityLexer } from './VelocityLexer';
import { VelocityParser } from './VelocityParser';
import { SymbolParserListener } from './SymbolParserListener';
import { VelocityParserListener } from './VelocityParserListener';
import {
	VelocityParserErrorListener,
	VelocityLexerErrorListener
} from './VelocityErrorListener'
import { CallSymbol, SymbolInstance } from './CallSymbol';
import { VelocityErrorStrategy } from './VelocityErrorStrategy';

/**
 * Class to hold all the symbols, text and errors in a cache.
 * It will handle throtling of changed text events through the scheduleParseDocument method.
 */
export class DocumentInfo 
{
	/**
	 * Document handler from the vscode lsp API
	 */
	document : TextDocument;
	/**
	 * List of references to symbols in this document
	 */
	tokenInstances = new Map<number, Array<SymbolInstance>>();
	/**
	 * Set of symbols captured in this document
	 */
	symbols = new Map<string, CallSymbol>();
	/**
	 * Set of calls to properties or methods in this document
	 */
	methodCalls = new Map<string, CallSymbol>();
	/**
	 * Set of calls to macros in this document
	 */
	macroCalls = new Map<string, CallSymbol>();
	/**
	 * Set of folding ranges in the document
	 */
	foldings = new Array<FoldingRange>();
	/**
	 * Error diagnostics event callback
	 */
	onError? : {(errorList: Diagnostic []):void};
	/** 
	 * Timer used for throtling the parsing calls
	 */
	private timer? : NodeJS.Timeout;

	/**
	 * Semantic tokens builder for this document
	 */
	semanticTokens : SemanticTokens = {data:[]};

	/**
	 * A index to the first symbol of each line.
	 */
	lineTokenIndex = new Array<number>();

	/**
	 * A sorted list of all the tokens
	 */
	allTokens = new Array<SymbolInstance>();

	/**
	 * The document version of the last parsing operation
	 */
	parseVersion = 0;

	/**
	 * DocumentInfo constructor
	 * @constructor
	 * @param d The document handler from the vscode api
	 */
	constructor(d: TextDocument) {
		this.document = d;
		//console.log("end construction ", this.document.uri);
	}

	/**
	 * Allows for the clean up of handlers and timers before object is unreferenced
	 */
	dispose() {
		if(this.timer)
			clearTimeout(this.timer);
	}

	/**
	 * Fully parses the document to find symbols and validate errors.
	 * @see {@link https://github.com/antlr/antlr4/blob/master/runtime/JavaScript/src/antlr4/Token.js}
	 * @see {@link https://github.com/tunnelvisionlabs/antlr4ts}
	 */
	parseDocument() {
		//console.log("document version " + this.document.version);
		let text = this.document.getText();
		this.parseVersion = this.document.version;
		let start = performance.now();
		
		let inputStream = CharStreams.fromString(text);
		let lexer = new VelocityLexer(inputStream);
		lexer.removeErrorListeners();
		let lexerErrors = new VelocityLexerErrorListener();
		lexer.addErrorListener(lexerErrors);

		//---------------------------------
		//DEBUG
		// for (let token = lexer.nextToken(); token.type != Token.EOF; token = lexer.nextToken())
		// {
		// 	console.log(token.toString());
		// }
		// lexer.reset();
		//---------------------------------

		let tokenStream = new CommonTokenStream(lexer);
		let parser = new VelocityParser(tokenStream);
		
		parser.removeErrorListeners();
		let parserErrors = new VelocityParserErrorListener();
		parser.addErrorListener(parserErrors);		
		//https://github.com/antlr/antlr4/blob/master/runtime/Java/src/org/antlr/v4/runtime/DefaultErrorStrategy.java
		//https://github.com/antlr/antlr4/blob/master/doc/parser-rules.md
		parser.errorHandler = new VelocityErrorStrategy();

		let tree = parser.templateFile();

		let listener = new SymbolParserListener();
		ParseTreeWalker.DEFAULT.walk(listener as VelocityParserListener, tree);

		this.symbols = listener.variables;
		this.methodCalls = listener.calls;
		this.macroCalls = listener.macros;
		this.foldings = listener.foldings;

		this.semanticTokens = {
			resultId: this.parseVersion.toString(),
			data: listener.getSemanticTokens()
		};

		this.allTokens = listener.allTokens;
		this.lineTokenIndex = listener.getLineIndex();

		//console.log(tree.toStringTree());

		let end  = performance.now();
		//console.log('Parsing: finished in ' + (end-start) + 'ms' + '. Symbol count ' + this.symbols.size);

		this.timer = undefined;

		if(this.onError)
			this.onError(parserErrors.errorList.concat(lexerErrors.errorList));
	}


	/**
	 * Fetches the symbol information at the requested position
	 * @param {Position} position The position to get the symbol from
	 * @returns {(CallSymbol | null)} The symbol at the position if found, or null if not found
	 */
	getSymbolAt(position: Position) : CallSymbol | null
	{
		if(position.line > this.lineTokenIndex.length)
			return null;

		let startIndex = this.lineTokenIndex[position.line];

		do {
			const instance = this.allTokens[startIndex];
			if(instance.range.start.line > position.line)
				return null;
			if(instance.range.start.character > position.character)
				return null;
			if(instance.range.end.character > position.character)
				return instance.symbol;
			startIndex++
		}
		while(startIndex < this.allTokens.length)

		return null;
	}

	/**
	 * Schedules the parsing of the document.
	 * Multiple calls to this method will only result in the actual document parsing
	 *   if the previous parsing call has finished.
	 * Otherwise the parsing will merely be rescheduled to a later time.
	 * Effectively this causes the parsing to occur only when the user has stopped
	 *   making changes to the document for more than X seconds.
	 * @param {() => void} [callback] optional callback for then the parsing is finished
	 */
	scheduleParseDocument(callback?: () => void) {
		//no need to reparse a version we already parsed
		if(this.parseVersion === this.document.version)
			return;

		//console.log("scheduleParseDocument " + this.document.version);
		if(this.timer)
			this.timer.refresh();
		else
			this.timer = setTimeout(() => {
				this.parseDocument();
				// console.log("parsing done");
				// this.triggerParsingDone();
				if(callback)
					callback();
			}, 1000);
	}

/*
	parsingDoneEvent = new Array<{resolve: (value: void) => void, reject: (value: void) => void}>();

	triggerParsingDone() {
		this.parsingDoneEvent.forEach( e => e.resolve() );
		this.parsingDoneEvent = [];
	}

	async subscribeParsingDone(): Promise<void> {
		var subscription = new Promise<void>((resolve, reject) => {
			this.parsingDoneEvent.push({resolve, reject});
		});
		return subscription;
	}
	*/
}