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
import { VelocityLexer } from './VelocityLexer';

export class VelocityParserErrorListener implements ParserErrorListener
{
	errorList: Diagnostic[] = [];

	isBlockRule(ruleIndex: number) : boolean
	{
		return ruleIndex == VelocityParser.RULE_dirFor
		|| ruleIndex == VelocityParser.RULE_dirIf
		|| ruleIndex == VelocityParser.RULE_dirMacroDef
		|| ruleIndex == VelocityParser.RULE_dirMacrocall;
	}

	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine;
		if(offendingSymbol && offendingSymbol.text)
		{
			endPositionInLine += offendingSymbol.text.length;

			//Specialized error messages
			let parser = recognizer as VelocityParser;

			//Diagnose blocks with too few closing statements that end up reaching EOF
			if(this.isBlockRule(parser.context.ruleIndex) && offendingSymbol.type == VelocityLexer.EOF)
			{
				line = parser.context.start.line;
				charPositionInLine = parser.context.start.charPositionInLine - 1;
				endPositionInLine = charPositionInLine + parser.context.start.text!.length + 1;
				msg = 'Could not find corresponding #end block closing statement.';
			}

			//When there is interleaving blocks the parser signals the current rule as dirEnd and we need to look for the parent rule
			if(parser.context.ruleIndex == VelocityParser.RULE_dirEnd && offendingSymbol.type == VelocityLexer.EOF)
			{
				//try to match it up with its parent rule				
				let parent = parser.context.parent;
				if(parent && this.isBlockRule(parent.ruleIndex))
				{
					line = parent.start.line;
					charPositionInLine = parent.start.charPositionInLine - 1;
					endPositionInLine = charPositionInLine + parent.start.text!.length + 1;
					msg = 'Could not find corresponding #end block closing statement.';
				}
			}

			//Diagnose extra #end blocks, the parser just pops out to the top level rule so we must lookahead to see if the next rule matched dirEnd
			//this does not work well for curly braced dirEnds though
			if(e && parser.context.ruleIndex == VelocityParser.RULE_templateFile && offendingSymbol.type == VelocityLexer.Directive)
			{
				if(e.inputStream?.LA(2) == VelocityLexer.END)
				{
					line = offendingSymbol.line;
					charPositionInLine = offendingSymbol.charPositionInLine;
					endPositionInLine = charPositionInLine + 4;
					msg = 'Possible extra #end block closing statement detected.';
				}
			}

			//console.log(parser.ruleNames[parser.context.ruleIndex], parser.vocabulary.getDisplayName(offendingSymbol.type));
		}

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