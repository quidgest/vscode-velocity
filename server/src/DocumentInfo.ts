/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import {
	TextDocument,
	Diagnostic
} from 'vscode-languageserver';
import { ANTLRInputStream, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { VelocityLexer } from './VelocityLexer';
import { VelocityParser } from './VelocityParser';
import { SymbolParserListener } from './SymbolParserListener';
import { VelocityParserListener } from './VelocityParserListener';
import {
	VelocityParserErrorListener,
	VelocityLexerErrorListener
} from './VelocityErrorListener'
import { CallSymbol } from './CallSymbol';

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
	 * Set of symbols captured in this document
	 */
	symbols = new Set<string>();
	/**
	 * Set of calls to properties or methods in this document
	 */
	methodCalls = new Map<string, CallSymbol>();
	/**
	 * Error diagnostics event callback
	 */
	onError? : {(errorList: Diagnostic []):void};
	/** 
	 * Timer used for throtling the parsing calls
	 */
	private timer? : NodeJS.Timeout;

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
		//console.log(this.document.uri);
		let text = this.document.getText();
		let start = new Date();

		let inputStream = new ANTLRInputStream(text);
		let lexer = new VelocityLexer(inputStream);
		lexer.removeErrorListeners();
		lexer.addErrorListener(new VelocityLexerErrorListener());

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

		let tree = parser.templateFile();

		if(parserErrors.errorList.length == 0)
		{
			let listener = new SymbolParserListener();
			this.symbols = listener.symbols;
			this.methodCalls = listener.calls;
			ParseTreeWalker.DEFAULT.walk(listener as VelocityParserListener, tree);
		}

		//console.log(tree.toStringTree());

		let end  = new Date();
		let time = end.getTime() - start.getTime();
		//console.log('Parsing: finished in ' + time + 'ms' + '. Symbol count ' + this.symbols.size);

		this.timer = undefined;

		if(this.onError)
			this.onError(parserErrors.errorList);
	}

	/**
	 * Schedules the parsing of the document.
	 * Multiple calls to this method will only result in the actual document parsing
	 *   if the previous parsing call has finished.
	 * Otherwise the parsing will merely be rescheduled to a later time.
	 * Effectively this causes the parsing to occur only when the user has stopped
	 *   making changes to the document for more than X seconds.
	 */
	scheduleParseDocument() {
		//console.log("scheduleParseDocument", this.timer);
		if(this.timer)
			this.timer.refresh();
		else
			this.timer = setTimeout(() => this.parseDocument(), 1000);
	}

}