/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import { ParserErrorListener } from 'antlr4ts/ParserErrorListener';
import { 
	ANTLRErrorListener,
	Token,
	Recognizer,
	RecognitionException
} from 'antlr4ts';
import {
	Diagnostic,
	DiagnosticSeverity,
} from 'vscode-languageserver';
import { VelocityParser } from './VelocityParser';

export class VelocityParserErrorListener implements ParserErrorListener
{
	errorList: Diagnostic[] = [];

	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine;
		if(offendingSymbol && offendingSymbol.text)
			endPositionInLine += offendingSymbol.text.length;

		this.errorList.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: {
					line: line-1,
					character: charPositionInLine 
				},
				end: {
					line: line-1,
					character: endPositionInLine
				}
			},
			message: msg,
			source: 'velocity'
		});
		//console.log("parser error", msg);
	}
}

export class VelocityLexerErrorListener implements ANTLRErrorListener<number>
{
	errorList: Diagnostic[] = [];	

	syntaxError(recognizer: Recognizer<number, any>, offendingSymbol: number | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine + 1;

		this.errorList.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: {
					line: line-1,
					character: charPositionInLine 
				},
				end: {
					line: line-1,
					character: endPositionInLine
				}
			},
			message: msg,
			source: 'velocity'
		});

		//console.log("lexer error", msg);
	}
}