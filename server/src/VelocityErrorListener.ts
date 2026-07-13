/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import { ParserErrorListener } from 'antlr4ts/ParserErrorListener';
import {
	ANTLRErrorListener,
	Token,
	Recognizer,
	RecognitionException,
	NoViableAltException,
	InputMismatchException,
	LexerNoViableAltException,
	ParserRuleContext
} from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
	Diagnostic,
	DiagnosticSeverity,
} from 'vscode-languageserver';
import {
	VelocityParser,
	ReferenceContext,
	DirSetContext,
	DirForContext
} from './VelocityParser';
import { VelocityLexer } from './VelocityLexer';

export class VelocityParserErrorListener implements ParserErrorListener
{
	errorList: Diagnostic[] = [];

	private static readonly knownDirectiveTokens = new Set<number>([
		VelocityLexer.LCURLY,
		VelocityLexer.BREAK,
		VelocityLexer.SET,
		VelocityLexer.FOR,
		VelocityLexer.IF,
		VelocityLexer.ELSEIF,
		VelocityLexer.ELSE,
		VelocityLexer.END,
		VelocityLexer.STOP,
		VelocityLexer.PARSE,
		VelocityLexer.INCLUDE,
		VelocityLexer.EVALUATE,
		VelocityLexer.DEFINE,
		VelocityLexer.MACRO
	]);

	private static readonly keywords = new Set<string>([
		'break',
		'set',
		'for',
		'between',
		'if',
		'elseif',
		'else',
		'end',
		'in',
		'parse',
		'macro',
		'include',
		'indent',
		'param',
		'global',
		'true',
		'false'
	]);

	isBlockRule(ruleIndex: number) : boolean
	{
		return ruleIndex == VelocityParser.RULE_dirFor
		|| ruleIndex == VelocityParser.RULE_dirIf
		|| ruleIndex == VelocityParser.RULE_dirMacroDef
		|| ruleIndex == VelocityParser.RULE_dirMacrocall
		|| ruleIndex == VelocityParser.RULE_dirDefine;
	}

	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine;
		let parser = recognizer instanceof VelocityParser ? recognizer : undefined;

		if(offendingSymbol && offendingSymbol.text)
		{
			endPositionInLine += offendingSymbol.text.length;
		}

		//Specialized error messages
		if(offendingSymbol && offendingSymbol.text && parser)
		{
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

		if(e instanceof NoViableAltException && parser)
		{
			let startToken = e.startToken;

			//If we can't parse anything after a $ then its most likely missing an escape
			let parentRule = parser.context.parent?.ruleIndex;
			if(startToken.type == VelocityLexer.Reference
				&& (parentRule == VelocityParser.RULE_template || parentRule == VelocityParser.RULE_stringTemplate))
			{
				line = startToken.line;
				charPositionInLine = startToken.charPositionInLine;
				endPositionInLine = charPositionInLine + (startToken.text?.length ?? 1);
				msg = "Possible escape missing before '$'.";
			}

			//We are inside a reference call and we started by chaining with a . but then initiated another reference with $ or #
			if(parser.context.ruleIndex == VelocityParser.RULE_call
				&& startToken.type == VelocityLexer.DOT
				&& e.getOffendingToken()?.type == VelocityLexer.Code)
			{
				line = startToken.line;
				charPositionInLine = startToken.charPositionInLine;
				endPositionInLine = charPositionInLine + 2;
				msg = "Possible ambiguous expression before '.$', try using '${expression}'.";
			}
		}

		if(e instanceof InputMismatchException && parser)
		{
			let offending = e.getOffendingToken();
			if(offending)
			{
				//If we can't parse anything after a # then its most likely missing an escape
				if(offending.type == VelocityLexer.Directive && !VelocityParserErrorListener.knownDirectiveTokens.has(e.inputStream?.LA(2) ?? 0))
				{
					line = offending.line;
					charPositionInLine = offending.charPositionInLine;
					endPositionInLine = charPositionInLine + (offending.text?.length ?? 1);
					msg = "Possible escape missing before '#'.";
				}

				//if we have a isolated null in the middle of an expression, its likely a $null
				if(offending.type == VelocityLexer.Identifier && offending.text == 'null')
				{
					line = offending.line;
					charPositionInLine = offending.charPositionInLine;
					endPositionInLine = charPositionInLine + (offending.text?.length ?? 1);
					msg = "Possible $ missing before identifier 'null'.";
				}

				if(offending.type == VelocityLexer.LPAREN)
				{
					//we are likely trying to write LPAREN as text instead of starting a function call
					let last = this.findLastReference(parser.context);
					if(last)
					{
						let stop = this.referenceStop(last);
						line = last.start.line;
						charPositionInLine = last.start.charPositionInLine;
						endPositionInLine = stop.charPositionInLine + (stop.text?.length ?? 1);
						msg = "Possible ambiguous expression, try using '${expression}' to clarify.";
					}

					//if we have a null right after a LPAREN then its likely a missing $null
					let nt = parser.inputStream.tryLT(2);
					if(nt && nt.type == VelocityLexer.Identifier && nt.text == 'null')
					{
						line = nt.line;
						charPositionInLine = nt.charPositionInLine;
						endPositionInLine = charPositionInLine + (nt.text?.length ?? 1);
						msg = "Possible $ missing before identifier 'null'.";
					}
				}

				//we are defining a macro but we cant match anything after the continuation
				if(offending.type == VelocityLexer.Identifier && e.context?.ruleIndex == VelocityParser.RULE_dirDefine)
				{
					let parent = e.context.parent;
					if(parent instanceof ParserRuleContext)
					{
						line = parent.start.line;
						charPositionInLine = parent.start.charPositionInLine;
						endPositionInLine = charPositionInLine + (parent.start.text?.length ?? 1);
						msg = "Possible escape missing before '#define'.";
					}
				}
			}
		}

		if(!e && offendingSymbol && parser)
		{
			if(offendingSymbol.type == VelocityLexer.LPAREN)
			{
				//we are likely trying to write LPAREN as text instead of starting a function call
				let last = this.findLastReference(parser.context);
				if(last)
				{
					let stop = this.referenceStop(last);
					line = last.start.line;
					charPositionInLine = last.start.charPositionInLine;
					endPositionInLine = stop.charPositionInLine + (stop.text?.length ?? 1);
					msg = "Possible ambiguous expression, try using '${expression}' to clarify.";
				}

				//if we have a null right after a LPAREN then its likely a missing $null
				let nt = parser.inputStream.tryLT(2);
				if(nt && nt.type == VelocityLexer.Identifier && nt.text == 'null')
				{
					line = nt.line;
					charPositionInLine = nt.charPositionInLine;
					endPositionInLine = charPositionInLine + (nt.text?.length ?? 1);
					msg = "Possible $ missing before identifier 'null'.";
				}
			}
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

	/**
	 * Post-parse validations over the finished parse tree.
	 * @param tree The parsed template tree
	 */
	check(tree: ParseTree): void
	{
		//check for variables declared with reserved keywords
		if(tree instanceof DirSetContext || tree instanceof DirForContext || tree instanceof ReferenceContext)
		{
			let idNode = tree.tryGetToken(VelocityParser.Identifier, 0);
			let id = idNode?.symbol.text;
			if(idNode && id && VelocityParserErrorListener.keywords.has(id))
			{
				this.errorList.push({
					severity: DiagnosticSeverity.Warning,
					range: {
						start: {
							line: idNode.symbol.line-1,
							character: idNode.symbol.charPositionInLine
						},
						end: {
							line: idNode.symbol.line-1,
							character: idNode.symbol.charPositionInLine + id.length
						}
					},
					message: "Variable declared with reserved keyword '" + id + "'.",
					source: 'velocity'
				});
			}
		}

		for(let i = 0; i < tree.childCount; i++)
			this.check(tree.getChild(i));
	}

	//The stop token is not set yet on contexts still being parsed, so fall back to the last terminal child
	private referenceStop(context: ReferenceContext): Token
	{
		if(context.stop)
			return context.stop;
		let last = context.childCount > 0 ? context.getChild(context.childCount - 1) : undefined;
		if(last instanceof TerminalNode)
			return last.symbol;
		return context.start;
	}

	private findLastReference(context: ParserRuleContext): ReferenceContext | undefined
	{
		let c = context;
		while(c.childCount > 0)
		{
			let last = c.getChild(c.childCount - 1);
			if(last instanceof ParserRuleContext)
			{
				c = last;
				if(last instanceof ReferenceContext)
					break;
			}
			else
				break;
		}
		return c instanceof ReferenceContext ? c : undefined;
	}
}

export class VelocityLexerErrorListener implements ANTLRErrorListener<number>
{
	errorList: Diagnostic[] = [];

	syntaxError(recognizer: Recognizer<number, any>, offendingSymbol: number | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {

		let endPositionInLine = charPositionInLine + 1;

		//we didn't recognize a character while we were in mode dir and the previous character is exactly a #
		//Then we are most likely missing an escape of the # symbol
		if(e instanceof LexerNoViableAltException
			&& recognizer instanceof VelocityLexer
			&& recognizer._mode == VelocityLexer.MODEDIR
			&& e.inputStream?.LA(-1) == '#'.charCodeAt(0))
		{
			msg = "Possible escape missing before '#'.";
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

		//console.log("lexer error", msg);
	}
}
