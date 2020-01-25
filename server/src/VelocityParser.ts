// Generated from ../syntaxes/VelocityParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VelocityParserListener } from "./VelocityParserListener";

export class VelocityParser extends Parser {
	public static readonly Code = 1;
	public static readonly EscapeCode = 2;
	public static readonly BlockComment = 3;
	public static readonly LineComment = 4;
	public static readonly UnparsedStart = 5;
	public static readonly Directive = 6;
	public static readonly Reference = 7;
	public static readonly UnparsedEnd = 8;
	public static readonly BANG = 9;
	public static readonly LCURLY = 10;
	public static readonly EMPTY1 = 11;
	public static readonly Identifier = 12;
	public static readonly EMPTY2 = 13;
	public static readonly DOT = 14;
	public static readonly EMPTY3 = 15;
	public static readonly RCURLY = 16;
	public static readonly VTL_UNKNOWN0 = 17;
	public static readonly AT = 18;
	public static readonly EMPTYD3 = 19;
	public static readonly BREAK = 20;
	public static readonly SET = 21;
	public static readonly FOR = 22;
	public static readonly IF = 23;
	public static readonly ELSEIF = 24;
	public static readonly ELSE = 25;
	public static readonly END = 26;
	public static readonly STOP = 27;
	public static readonly PARSE = 28;
	public static readonly INCLUDE = 29;
	public static readonly EVALUATE = 30;
	public static readonly DEFINE = 31;
	public static readonly MACRO = 32;
	public static readonly DIR_WhiteSpace = 33;
	public static readonly VTL_UNKNOWN1 = 34;
	public static readonly NUMBER = 35;
	public static readonly BOOL = 36;
	public static readonly LPAREN = 37;
	public static readonly RPAREN = 38;
	public static readonly DPOINT = 39;
	public static readonly COMMA = 40;
	public static readonly DQUOTE = 41;
	public static readonly STRING = 42;
	public static readonly IN = 43;
	public static readonly LBRAK = 44;
	public static readonly RBRAK = 45;
	public static readonly PLUS = 46;
	public static readonly MINUS = 47;
	public static readonly DIV = 48;
	public static readonly MULT = 49;
	public static readonly MODUL = 50;
	public static readonly AND = 51;
	public static readonly OR = 52;
	public static readonly NOT = 53;
	public static readonly LT = 54;
	public static readonly GT = 55;
	public static readonly LE = 56;
	public static readonly GE = 57;
	public static readonly EQ = 58;
	public static readonly NE = 59;
	public static readonly ATTRIB = 60;
	public static readonly Whitespace = 61;
	public static readonly Newline = 62;
	public static readonly TEXT = 63;
	public static readonly ESCAPETEXT = 64;
	public static readonly RULE_templateFile = 0;
	public static readonly RULE_template = 1;
	public static readonly RULE_reference = 2;
	public static readonly RULE_call = 3;
	public static readonly RULE_indexcall = 4;
	public static readonly RULE_methodcall = 5;
	public static readonly RULE_functioncall = 6;
	public static readonly RULE_arglist = 7;
	public static readonly RULE_expr = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_stringTemplate = 10;
	public static readonly RULE_collection = 11;
	public static readonly RULE_range = 12;
	public static readonly RULE_directive = 13;
	public static readonly RULE_dirSet = 14;
	public static readonly RULE_dirParse = 15;
	public static readonly RULE_dirInclude = 16;
	public static readonly RULE_dirEvaluate = 17;
	public static readonly RULE_dirStop = 18;
	public static readonly RULE_dirBreak = 19;
	public static readonly RULE_dirMacrocall = 20;
	public static readonly RULE_dirDefine = 21;
	public static readonly RULE_dirFor = 22;
	public static readonly RULE_dirIf = 23;
	public static readonly RULE_dirElseif = 24;
	public static readonly RULE_dirElse = 25;
	public static readonly RULE_dirEnd = 26;
	public static readonly RULE_dirMacroDef = 27;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"templateFile", "template", "reference", "call", "indexcall", "methodcall", 
		"functioncall", "arglist", "expr", "literal", "stringTemplate", "collection", 
		"range", "directive", "dirSet", "dirParse", "dirInclude", "dirEvaluate", 
		"dirStop", "dirBreak", "dirMacrocall", "dirDefine", "dirFor", "dirIf", 
		"dirElseif", "dirElse", "dirEnd", "dirMacroDef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#[['", "'#'", 
		"'$'", "']]#'", "'!'", undefined, undefined, undefined, undefined, "'.'", 
		undefined, undefined, undefined, "'@'", undefined, "'break'", "'set'", 
		"'foreach'", "'if'", "'elseif'", "'else'", "'end'", "'stop'", "'parse'", 
		"'include'", "'evaluate'", "'define'", "'macro'", undefined, undefined, 
		undefined, undefined, "'('", "')'", "'..'", "','", undefined, undefined, 
		"'in'", "'['", "']'", "'+'", "'-'", "'/'", "'*'", "'%'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Code", "EscapeCode", "BlockComment", "LineComment", "UnparsedStart", 
		"Directive", "Reference", "UnparsedEnd", "BANG", "LCURLY", "EMPTY1", "Identifier", 
		"EMPTY2", "DOT", "EMPTY3", "RCURLY", "VTL_UNKNOWN0", "AT", "EMPTYD3", 
		"BREAK", "SET", "FOR", "IF", "ELSEIF", "ELSE", "END", "STOP", "PARSE", 
		"INCLUDE", "EVALUATE", "DEFINE", "MACRO", "DIR_WhiteSpace", "VTL_UNKNOWN1", 
		"NUMBER", "BOOL", "LPAREN", "RPAREN", "DPOINT", "COMMA", "DQUOTE", "STRING", 
		"IN", "LBRAK", "RBRAK", "PLUS", "MINUS", "DIV", "MULT", "MODUL", "AND", 
		"OR", "NOT", "LT", "GT", "LE", "GE", "EQ", "NE", "ATTRIB", "Whitespace", 
		"Newline", "TEXT", "ESCAPETEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VelocityParser._LITERAL_NAMES, VelocityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VelocityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "VelocityParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return VelocityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VelocityParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VelocityParser._ATN, this);
	}
	// @RuleVersion(0)
	public templateFile(): TemplateFileContext {
		let _localctx: TemplateFileContext = new TemplateFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VelocityParser.RULE_templateFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.template();
			this.state = 57;
			this.match(VelocityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VelocityParser.RULE_template);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 63;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case VelocityParser.Code:
						{
						this.state = 59;
						this.match(VelocityParser.Code);
						}
						break;
					case VelocityParser.EscapeCode:
						{
						this.state = 60;
						this.match(VelocityParser.EscapeCode);
						}
						break;
					case VelocityParser.Directive:
						{
						this.state = 61;
						this.directive();
						}
						break;
					case VelocityParser.Reference:
						{
						this.state = 62;
						this.reference();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VelocityParser.RULE_reference);
		let _la: number;
		try {
			let _alt: number;
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(VelocityParser.Reference);
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VelocityParser.BANG) {
					{
					this.state = 69;
					this.match(VelocityParser.BANG);
					}
				}

				this.state = 72;
				this.match(VelocityParser.Identifier);
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 73;
						this.call();
						}
						}
					}
					this.state = 78;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 79;
				this.match(VelocityParser.Reference);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VelocityParser.BANG) {
					{
					this.state = 80;
					this.match(VelocityParser.BANG);
					}
				}

				this.state = 83;
				this.match(VelocityParser.LCURLY);
				this.state = 84;
				this.match(VelocityParser.Identifier);
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VelocityParser.DOT || _la === VelocityParser.LBRAK) {
					{
					{
					this.state = 85;
					this.call();
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 91;
				this.match(VelocityParser.RCURLY);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VelocityParser.RULE_call);
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.indexcall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.methodcall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.functioncall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexcall(): IndexcallContext {
		let _localctx: IndexcallContext = new IndexcallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VelocityParser.RULE_indexcall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(VelocityParser.LBRAK);
			this.state = 100;
			this.expr(0);
			this.state = 101;
			this.match(VelocityParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodcall(): MethodcallContext {
		let _localctx: MethodcallContext = new MethodcallContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VelocityParser.RULE_methodcall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this.match(VelocityParser.DOT);
			this.state = 104;
			this.match(VelocityParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functioncall(): FunctioncallContext {
		let _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VelocityParser.RULE_functioncall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(VelocityParser.DOT);
			this.state = 107;
			this.match(VelocityParser.Identifier);
			this.state = 108;
			this.match(VelocityParser.LPAREN);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VelocityParser.Reference || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VelocityParser.NUMBER - 35)) | (1 << (VelocityParser.BOOL - 35)) | (1 << (VelocityParser.LPAREN - 35)) | (1 << (VelocityParser.DQUOTE - 35)) | (1 << (VelocityParser.STRING - 35)) | (1 << (VelocityParser.LBRAK - 35)) | (1 << (VelocityParser.NOT - 35)))) !== 0)) {
				{
				this.state = 109;
				this.arglist();
				}
			}

			this.state = 112;
			this.match(VelocityParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VelocityParser.RULE_arglist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.expr(0);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.COMMA) {
				{
				{
				this.state = 115;
				this.match(VelocityParser.COMMA);
				this.state = 116;
				this.expr(0);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, VelocityParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 123;
				this.match(VelocityParser.LPAREN);
				this.state = 124;
				this.expr(0);
				this.state = 125;
				this.match(VelocityParser.RPAREN);
				}
				break;

			case 2:
				{
				this.state = 127;
				this.match(VelocityParser.NOT);
				this.state = 128;
				this.expr(11);
				}
				break;

			case 3:
				{
				this.state = 129;
				this.reference();
				}
				break;

			case 4:
				{
				this.state = 130;
				this.literal();
				}
				break;

			case 5:
				{
				this.state = 131;
				this.stringTemplate();
				}
				break;

			case 6:
				{
				this.state = 132;
				this.collection();
				}
				break;

			case 7:
				{
				this.state = 133;
				this.range();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 177;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 175;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 136;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 137;
						this.match(VelocityParser.OR);
						this.state = 138;
						this.expr(20);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 139;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 140;
						this.match(VelocityParser.AND);
						this.state = 141;
						this.expr(19);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 142;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 143;
						this.match(VelocityParser.LE);
						this.state = 144;
						this.expr(18);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 145;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 146;
						this.match(VelocityParser.LT);
						this.state = 147;
						this.expr(17);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 148;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 149;
						this.match(VelocityParser.GE);
						this.state = 150;
						this.expr(16);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 151;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 152;
						this.match(VelocityParser.GT);
						this.state = 153;
						this.expr(15);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 154;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 155;
						this.match(VelocityParser.EQ);
						this.state = 156;
						this.expr(14);
						}
						break;

					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 157;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 158;
						this.match(VelocityParser.NE);
						this.state = 159;
						this.expr(13);
						}
						break;

					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 160;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 161;
						this.match(VelocityParser.PLUS);
						this.state = 162;
						this.expr(11);
						}
						break;

					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 163;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 164;
						this.match(VelocityParser.MINUS);
						this.state = 165;
						this.expr(10);
						}
						break;

					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 166;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 167;
						this.match(VelocityParser.MULT);
						this.state = 168;
						this.expr(9);
						}
						break;

					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 169;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 170;
						this.match(VelocityParser.DIV);
						this.state = 171;
						this.expr(8);
						}
						break;

					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 172;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 173;
						this.match(VelocityParser.MODUL);
						this.state = 174;
						this.expr(7);
						}
						break;
					}
					}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VelocityParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VelocityParser.NUMBER - 35)) | (1 << (VelocityParser.BOOL - 35)) | (1 << (VelocityParser.STRING - 35)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringTemplate(): StringTemplateContext {
		let _localctx: StringTemplateContext = new StringTemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VelocityParser.RULE_stringTemplate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(VelocityParser.DQUOTE);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.Reference || _la === VelocityParser.TEXT || _la === VelocityParser.ESCAPETEXT) {
				{
				this.state = 186;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VelocityParser.TEXT:
					{
					this.state = 183;
					this.match(VelocityParser.TEXT);
					}
					break;
				case VelocityParser.ESCAPETEXT:
					{
					this.state = 184;
					this.match(VelocityParser.ESCAPETEXT);
					}
					break;
				case VelocityParser.Reference:
					{
					this.state = 185;
					this.reference();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(VelocityParser.DQUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collection(): CollectionContext {
		let _localctx: CollectionContext = new CollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VelocityParser.RULE_collection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(VelocityParser.LBRAK);
			this.state = 194;
			this.expr(0);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.COMMA) {
				{
				{
				this.state = 195;
				this.match(VelocityParser.COMMA);
				this.state = 196;
				this.expr(0);
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 202;
			this.match(VelocityParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VelocityParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(VelocityParser.LBRAK);
			this.state = 205;
			this.match(VelocityParser.NUMBER);
			this.state = 206;
			this.match(VelocityParser.DPOINT);
			this.state = 207;
			this.match(VelocityParser.NUMBER);
			this.state = 208;
			this.match(VelocityParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VelocityParser.RULE_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(VelocityParser.Directive);
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this.dirSet();
				}
				break;

			case 2:
				{
				this.state = 212;
				this.match(VelocityParser.LCURLY);
				this.state = 213;
				this.dirSet();
				this.state = 214;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 3:
				{
				this.state = 216;
				this.dirFor();
				}
				break;

			case 4:
				{
				this.state = 217;
				this.dirIf();
				}
				break;

			case 5:
				{
				this.state = 218;
				this.dirMacroDef();
				}
				break;

			case 6:
				{
				this.state = 219;
				this.dirParse();
				}
				break;

			case 7:
				{
				this.state = 220;
				this.dirDefine();
				}
				break;

			case 8:
				{
				this.state = 221;
				this.match(VelocityParser.LCURLY);
				this.state = 222;
				this.dirParse();
				this.state = 223;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 9:
				{
				this.state = 225;
				this.dirInclude();
				}
				break;

			case 10:
				{
				this.state = 226;
				this.match(VelocityParser.LCURLY);
				this.state = 227;
				this.dirInclude();
				this.state = 228;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 11:
				{
				this.state = 230;
				this.dirEvaluate();
				}
				break;

			case 12:
				{
				this.state = 231;
				this.match(VelocityParser.LCURLY);
				this.state = 232;
				this.dirEvaluate();
				this.state = 233;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 13:
				{
				this.state = 235;
				this.dirStop();
				}
				break;

			case 14:
				{
				this.state = 236;
				this.match(VelocityParser.LCURLY);
				this.state = 237;
				this.dirStop();
				this.state = 238;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 15:
				{
				this.state = 240;
				this.dirBreak();
				}
				break;

			case 16:
				{
				this.state = 241;
				this.match(VelocityParser.LCURLY);
				this.state = 242;
				this.dirBreak();
				this.state = 243;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 17:
				{
				this.state = 245;
				this.dirMacrocall();
				}
				break;

			case 18:
				{
				this.state = 246;
				this.match(VelocityParser.LCURLY);
				this.state = 247;
				this.dirMacrocall();
				this.state = 248;
				this.match(VelocityParser.RCURLY);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirSet(): DirSetContext {
		let _localctx: DirSetContext = new DirSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VelocityParser.RULE_dirSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.match(VelocityParser.SET);
			this.state = 253;
			this.match(VelocityParser.LPAREN);
			this.state = 254;
			this.match(VelocityParser.Reference);
			this.state = 255;
			this.match(VelocityParser.Identifier);
			this.state = 256;
			this.match(VelocityParser.ATTRIB);
			this.state = 257;
			this.expr(0);
			this.state = 258;
			this.match(VelocityParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirParse(): DirParseContext {
		let _localctx: DirParseContext = new DirParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VelocityParser.RULE_dirParse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(VelocityParser.PARSE);
			this.state = 261;
			this.match(VelocityParser.LPAREN);
			this.state = 262;
			this.expr(0);
			this.state = 263;
			this.match(VelocityParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirInclude(): DirIncludeContext {
		let _localctx: DirIncludeContext = new DirIncludeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VelocityParser.RULE_dirInclude);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(VelocityParser.INCLUDE);
			this.state = 266;
			this.match(VelocityParser.LPAREN);
			this.state = 267;
			this.expr(0);
			this.state = 268;
			this.match(VelocityParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirEvaluate(): DirEvaluateContext {
		let _localctx: DirEvaluateContext = new DirEvaluateContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VelocityParser.RULE_dirEvaluate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(VelocityParser.EVALUATE);
			this.state = 271;
			this.match(VelocityParser.LPAREN);
			this.state = 272;
			this.expr(0);
			this.state = 273;
			this.match(VelocityParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirStop(): DirStopContext {
		let _localctx: DirStopContext = new DirStopContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VelocityParser.RULE_dirStop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(VelocityParser.STOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirBreak(): DirBreakContext {
		let _localctx: DirBreakContext = new DirBreakContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VelocityParser.RULE_dirBreak);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(VelocityParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirMacrocall(): DirMacrocallContext {
		let _localctx: DirMacrocallContext = new DirMacrocallContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VelocityParser.RULE_dirMacrocall);
		let _la: number;
		try {
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(VelocityParser.Identifier);
				this.state = 280;
				this.match(VelocityParser.LPAREN);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VelocityParser.Reference || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VelocityParser.NUMBER - 35)) | (1 << (VelocityParser.BOOL - 35)) | (1 << (VelocityParser.LPAREN - 35)) | (1 << (VelocityParser.DQUOTE - 35)) | (1 << (VelocityParser.STRING - 35)) | (1 << (VelocityParser.LBRAK - 35)) | (1 << (VelocityParser.NOT - 35)))) !== 0)) {
					{
					{
					this.state = 281;
					this.expr(0);
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 287;
				this.match(VelocityParser.RPAREN);
				}
				break;
			case VelocityParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.match(VelocityParser.AT);
				this.state = 289;
				this.match(VelocityParser.Identifier);
				this.state = 290;
				this.match(VelocityParser.LPAREN);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VelocityParser.Reference || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (VelocityParser.NUMBER - 35)) | (1 << (VelocityParser.BOOL - 35)) | (1 << (VelocityParser.LPAREN - 35)) | (1 << (VelocityParser.DQUOTE - 35)) | (1 << (VelocityParser.STRING - 35)) | (1 << (VelocityParser.LBRAK - 35)) | (1 << (VelocityParser.NOT - 35)))) !== 0)) {
					{
					{
					this.state = 291;
					this.expr(0);
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 297;
				this.match(VelocityParser.RPAREN);
				this.state = 298;
				this.template();
				this.state = 299;
				this.dirEnd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirDefine(): DirDefineContext {
		let _localctx: DirDefineContext = new DirDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VelocityParser.RULE_dirDefine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(VelocityParser.DEFINE);
			this.state = 304;
			this.match(VelocityParser.LPAREN);
			this.state = 305;
			this.match(VelocityParser.Reference);
			this.state = 306;
			this.match(VelocityParser.Identifier);
			this.state = 307;
			this.match(VelocityParser.RPAREN);
			this.state = 308;
			this.template();
			this.state = 309;
			this.dirEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirFor(): DirForContext {
		let _localctx: DirForContext = new DirForContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VelocityParser.RULE_dirFor);
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 311;
				this.match(VelocityParser.FOR);
				this.state = 312;
				this.match(VelocityParser.LPAREN);
				this.state = 313;
				this.match(VelocityParser.Reference);
				this.state = 314;
				this.match(VelocityParser.Identifier);
				this.state = 315;
				this.match(VelocityParser.IN);
				this.state = 316;
				this.expr(0);
				this.state = 317;
				this.match(VelocityParser.RPAREN);
				this.state = 318;
				this.template();
				this.state = 320;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 319;
					this.dirElse();
					}
					break;
				}
				this.state = 322;
				this.dirEnd();
				}
				break;
			case VelocityParser.LCURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 324;
				this.match(VelocityParser.LCURLY);
				this.state = 325;
				this.match(VelocityParser.FOR);
				this.state = 326;
				this.match(VelocityParser.LPAREN);
				this.state = 327;
				this.match(VelocityParser.Reference);
				this.state = 328;
				this.match(VelocityParser.Identifier);
				this.state = 329;
				this.match(VelocityParser.IN);
				this.state = 330;
				this.expr(0);
				this.state = 331;
				this.match(VelocityParser.RPAREN);
				this.state = 332;
				this.match(VelocityParser.RCURLY);
				this.state = 333;
				this.template();
				this.state = 335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
				case 1:
					{
					this.state = 334;
					this.dirElse();
					}
					break;
				}
				this.state = 337;
				this.dirEnd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirIf(): DirIfContext {
		let _localctx: DirIfContext = new DirIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VelocityParser.RULE_dirIf);
		try {
			let _alt: number;
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(VelocityParser.IF);
				this.state = 342;
				this.match(VelocityParser.LPAREN);
				this.state = 343;
				this.expr(0);
				this.state = 344;
				this.match(VelocityParser.RPAREN);
				this.state = 345;
				this.template();
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 346;
						this.dirElseif();
						}
						}
					}
					this.state = 351;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 353;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 352;
					this.dirElse();
					}
					break;
				}
				this.state = 355;
				this.dirEnd();
				}
				break;
			case VelocityParser.LCURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(VelocityParser.LCURLY);
				this.state = 358;
				this.match(VelocityParser.IF);
				this.state = 359;
				this.match(VelocityParser.LPAREN);
				this.state = 360;
				this.expr(0);
				this.state = 361;
				this.match(VelocityParser.RPAREN);
				this.state = 362;
				this.match(VelocityParser.RCURLY);
				this.state = 363;
				this.template();
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 364;
						this.dirElseif();
						}
						}
					}
					this.state = 369;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 371;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 370;
					this.dirElse();
					}
					break;
				}
				this.state = 373;
				this.dirEnd();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirElseif(): DirElseifContext {
		let _localctx: DirElseifContext = new DirElseifContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VelocityParser.RULE_dirElseif);
		try {
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 377;
				this.match(VelocityParser.Directive);
				this.state = 378;
				this.match(VelocityParser.ELSEIF);
				this.state = 379;
				this.match(VelocityParser.LPAREN);
				this.state = 380;
				this.expr(0);
				this.state = 381;
				this.match(VelocityParser.RPAREN);
				this.state = 382;
				this.template();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
				this.match(VelocityParser.Directive);
				this.state = 385;
				this.match(VelocityParser.LCURLY);
				this.state = 386;
				this.match(VelocityParser.ELSEIF);
				this.state = 387;
				this.match(VelocityParser.LPAREN);
				this.state = 388;
				this.expr(0);
				this.state = 389;
				this.match(VelocityParser.RPAREN);
				this.state = 390;
				this.match(VelocityParser.RCURLY);
				this.state = 391;
				this.template();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirElse(): DirElseContext {
		let _localctx: DirElseContext = new DirElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VelocityParser.RULE_dirElse);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 395;
				this.match(VelocityParser.Directive);
				this.state = 396;
				this.match(VelocityParser.ELSE);
				this.state = 397;
				this.template();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 398;
				this.match(VelocityParser.Directive);
				this.state = 399;
				this.match(VelocityParser.LCURLY);
				this.state = 400;
				this.match(VelocityParser.ELSE);
				this.state = 401;
				this.match(VelocityParser.RCURLY);
				this.state = 402;
				this.template();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirEnd(): DirEndContext {
		let _localctx: DirEndContext = new DirEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VelocityParser.RULE_dirEnd);
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.match(VelocityParser.Directive);
				this.state = 406;
				this.match(VelocityParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.match(VelocityParser.Directive);
				this.state = 408;
				this.match(VelocityParser.LCURLY);
				this.state = 409;
				this.match(VelocityParser.END);
				this.state = 410;
				this.match(VelocityParser.RCURLY);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dirMacroDef(): DirMacroDefContext {
		let _localctx: DirMacroDefContext = new DirMacroDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VelocityParser.RULE_dirMacroDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(VelocityParser.MACRO);
			this.state = 414;
			this.match(VelocityParser.LPAREN);
			this.state = 415;
			this.match(VelocityParser.Identifier);
			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.Reference) {
				{
				{
				this.state = 416;
				this.match(VelocityParser.Reference);
				this.state = 417;
				this.match(VelocityParser.Identifier);
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VelocityParser.ATTRIB) {
					{
					this.state = 418;
					this.match(VelocityParser.ATTRIB);
					this.state = 419;
					this.literal();
					}
				}

				}
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 427;
			this.match(VelocityParser.RPAREN);
			this.state = 428;
			this.template();
			this.state = 429;
			this.dirEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 8:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 19);

		case 1:
			return this.precpred(this._ctx, 18);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 7);

		case 12:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u01B2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03B\n\x03\f\x03\x0E\x03E\v\x03\x03\x04\x03\x04\x05\x04I\n\x04\x03\x04" +
		"\x03\x04\x07\x04M\n\x04\f\x04\x0E\x04P\v\x04\x03\x04\x03\x04\x05\x04T" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x07\x04Y\n\x04\f\x04\x0E\x04\\\v\x04\x03" +
		"\x04\x05\x04_\n\x04\x03\x05\x03\x05\x03\x05\x05\x05d\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05" +
		"\bq\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tx\n\t\f\t\x0E\t{\v\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05" +
		"\n\x89\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xB2\n\n\f\n\x0E\n\xB5\v\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\xBD\n\f\f\f\x0E\f\xC0\v\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x07\r\xC8\n\r\f\r\x0E\r\xCB\v\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xFD\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16\u011D\n\x16" +
		"\f\x16\x0E\x16\u0120\v\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07" +
		"\x16\u0127\n\x16\f\x16\x0E\x16\u012A\v\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x05\x16\u0130\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0143\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u0152\n\x18\x03\x18\x03\x18\x05\x18\u0156\n\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x07\x19\u015E\n\x19\f\x19\x0E\x19\u0161\v" +
		"\x19\x03\x19\x05\x19\u0164\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0170\n\x19\f\x19\x0E" +
		"\x19\u0173\v\x19\x03\x19\x05\x19\u0176\n\x19\x03\x19\x03\x19\x05\x19\u017A" +
		"\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u018C\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x05\x1B\u0196\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x05\x1C\u019E\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u01A7\n\x1D\x07\x1D\u01A9\n\x1D\f\x1D\x0E\x1D\u01AC\v\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x02\x02\x03\x12\x1E\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02\x02\x03\x04\x02%&,,\x02\u01DA\x02:\x03\x02" +
		"\x02\x02\x04C\x03\x02\x02\x02\x06^\x03\x02\x02\x02\bc\x03\x02\x02\x02" +
		"\ne\x03\x02\x02\x02\fi\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10t\x03\x02" +
		"\x02\x02\x12\x88\x03\x02\x02\x02\x14\xB6\x03\x02\x02\x02\x16\xB8\x03\x02" +
		"\x02\x02\x18\xC3\x03\x02\x02\x02\x1A\xCE\x03\x02\x02\x02\x1C\xD4\x03\x02" +
		"\x02\x02\x1E\xFE\x03\x02\x02\x02 \u0106\x03\x02\x02\x02\"\u010B\x03\x02" +
		"\x02\x02$\u0110\x03\x02\x02\x02&\u0115\x03\x02\x02\x02(\u0117\x03\x02" +
		"\x02\x02*\u012F\x03\x02\x02\x02,\u0131\x03\x02\x02\x02.\u0155\x03\x02" +
		"\x02\x020\u0179\x03\x02\x02\x022\u018B\x03\x02\x02\x024\u0195\x03\x02" +
		"\x02\x026\u019D\x03\x02\x02\x028\u019F\x03\x02\x02\x02:;\x05\x04\x03\x02" +
		";<\x07\x02\x02\x03<\x03\x03\x02\x02\x02=B\x07\x03\x02\x02>B\x07\x04\x02" +
		"\x02?B\x05\x1C\x0F\x02@B\x05\x06\x04\x02A=\x03\x02\x02\x02A>\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02" +
		"\x02CD\x03\x02\x02\x02D\x05\x03\x02\x02\x02EC\x03\x02\x02\x02FH\x07\t" +
		"\x02\x02GI\x07\v\x02\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02" +
		"\x02\x02JN\x07\x0E\x02\x02KM\x05\b\x05\x02LK\x03\x02\x02\x02MP\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O_\x03\x02\x02\x02PN\x03\x02" +
		"\x02\x02QS\x07\t\x02\x02RT\x07\v\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TU\x03\x02\x02\x02UV\x07\f\x02\x02VZ\x07\x0E\x02\x02WY\x05\b\x05\x02" +
		"XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02" +
		"\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02]_\x07\x12\x02\x02^F\x03\x02" +
		"\x02\x02^Q\x03\x02\x02\x02_\x07\x03\x02\x02\x02`d\x05\n\x06\x02ad\x05" +
		"\f\x07\x02bd\x05\x0E\b\x02c`\x03\x02\x02\x02ca\x03\x02\x02\x02cb\x03\x02" +
		"\x02\x02d\t\x03\x02\x02\x02ef\x07.\x02\x02fg\x05\x12\n\x02gh\x07/\x02" +
		"\x02h\v\x03\x02\x02\x02ij\x07\x10\x02\x02jk\x07\x0E\x02\x02k\r\x03\x02" +
		"\x02\x02lm\x07\x10\x02\x02mn\x07\x0E\x02\x02np\x07\'\x02\x02oq\x05\x10" +
		"\t\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x07(\x02" +
		"\x02s\x0F\x03\x02\x02\x02ty\x05\x12\n\x02uv\x07*\x02\x02vx\x05\x12\n\x02" +
		"wu\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02" +
		"z\x11\x03\x02\x02\x02{y\x03\x02\x02\x02|}\b\n\x01\x02}~\x07\'\x02\x02" +
		"~\x7F\x05\x12\n\x02\x7F\x80\x07(\x02\x02\x80\x89\x03\x02\x02\x02\x81\x82" +
		"\x077\x02\x02\x82\x89\x05\x12\n\r\x83\x89\x05\x06\x04\x02\x84\x89\x05" +
		"\x14\v\x02\x85\x89\x05\x16\f\x02\x86\x89\x05\x18\r\x02\x87\x89\x05\x1A" +
		"\x0E\x02\x88|\x03\x02\x02\x02\x88\x81\x03\x02\x02\x02\x88\x83\x03\x02" +
		"\x02\x02\x88\x84\x03\x02\x02\x02\x88\x85\x03\x02\x02\x02\x88\x86\x03\x02" +
		"\x02\x02\x88\x87\x03\x02\x02\x02\x89\xB3\x03\x02\x02\x02\x8A\x8B\f\x15" +
		"\x02\x02\x8B\x8C\x076\x02\x02\x8C\xB2\x05\x12\n\x16\x8D\x8E\f\x14\x02" +
		"\x02\x8E\x8F\x075\x02\x02\x8F\xB2\x05\x12\n\x15\x90\x91\f\x13\x02\x02" +
		"\x91\x92\x07:\x02\x02\x92\xB2\x05\x12\n\x14\x93\x94\f\x12\x02\x02\x94" +
		"\x95\x078\x02\x02\x95\xB2\x05\x12\n\x13\x96\x97\f\x11\x02\x02\x97\x98" +
		"\x07;\x02\x02\x98\xB2\x05\x12\n\x12\x99\x9A\f\x10\x02\x02\x9A\x9B\x07" +
		"9\x02\x02\x9B\xB2\x05\x12\n\x11\x9C\x9D\f\x0F\x02\x02\x9D\x9E\x07<\x02" +
		"\x02\x9E\xB2\x05\x12\n\x10\x9F\xA0\f\x0E\x02\x02\xA0\xA1\x07=\x02\x02" +
		"\xA1\xB2\x05\x12\n\x0F\xA2\xA3\f\f\x02\x02\xA3\xA4\x070\x02\x02\xA4\xB2" +
		"\x05\x12\n\r\xA5\xA6\f\v\x02\x02\xA6\xA7\x071\x02\x02\xA7\xB2\x05\x12" +
		"\n\f\xA8\xA9\f\n\x02\x02\xA9\xAA\x073\x02\x02\xAA\xB2\x05\x12\n\v\xAB" +
		"\xAC\f\t\x02\x02\xAC\xAD\x072\x02\x02\xAD\xB2\x05\x12\n\n\xAE\xAF\f\b" +
		"\x02\x02\xAF\xB0\x074\x02\x02\xB0\xB2\x05\x12\n\t\xB1\x8A\x03\x02\x02" +
		"\x02\xB1\x8D\x03\x02\x02\x02\xB1\x90\x03\x02\x02\x02\xB1\x93\x03\x02\x02" +
		"\x02\xB1\x96\x03\x02\x02\x02\xB1\x99\x03\x02\x02\x02\xB1\x9C\x03\x02\x02" +
		"\x02\xB1\x9F\x03\x02\x02\x02\xB1\xA2\x03\x02\x02\x02\xB1\xA5\x03\x02\x02" +
		"\x02\xB1\xA8\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAE\x03\x02\x02" +
		"\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\x13\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB7\t\x02\x02" +
		"\x02\xB7\x15\x03\x02\x02\x02\xB8\xBE\x07+\x02\x02\xB9\xBD\x07A\x02\x02" +
		"\xBA\xBD\x07B\x02\x02\xBB\xBD\x05\x06\x04\x02\xBC\xB9\x03\x02\x02\x02" +
		"\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02" +
		"\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x07+\x02\x02\xC2\x17\x03\x02\x02\x02" +
		"\xC3\xC4\x07.\x02\x02\xC4\xC9\x05\x12\n\x02\xC5\xC6\x07*\x02\x02\xC6\xC8" +
		"\x05\x12\n\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB\xC9" +
		"\x03\x02\x02\x02\xCC\xCD\x07/\x02\x02\xCD\x19\x03\x02\x02\x02\xCE\xCF" +
		"\x07.\x02\x02\xCF\xD0\x07%\x02\x02\xD0\xD1\x07)\x02\x02\xD1\xD2\x07%\x02" +
		"\x02\xD2\xD3\x07/\x02\x02\xD3\x1B\x03\x02\x02\x02\xD4\xFC\x07\b\x02\x02" +
		"\xD5\xFD\x05\x1E\x10\x02\xD6\xD7\x07\f\x02\x02\xD7\xD8\x05\x1E\x10\x02" +
		"\xD8\xD9\x07\x12\x02\x02\xD9\xFD\x03\x02\x02\x02\xDA\xFD\x05.\x18\x02" +
		"\xDB\xFD\x050\x19\x02\xDC\xFD\x058\x1D\x02\xDD\xFD\x05 \x11\x02\xDE\xFD" +
		"\x05,\x17\x02\xDF\xE0\x07\f\x02\x02\xE0\xE1\x05 \x11\x02\xE1\xE2\x07\x12" +
		"\x02\x02\xE2\xFD\x03\x02\x02\x02\xE3\xFD\x05\"\x12\x02\xE4\xE5\x07\f\x02" +
		"\x02\xE5\xE6\x05\"\x12\x02\xE6\xE7\x07\x12\x02\x02\xE7\xFD\x03\x02\x02" +
		"\x02\xE8\xFD\x05$\x13\x02\xE9\xEA\x07\f\x02\x02\xEA\xEB\x05$\x13\x02\xEB" +
		"\xEC\x07\x12\x02\x02\xEC\xFD\x03\x02\x02\x02\xED\xFD\x05&\x14\x02\xEE" +
		"\xEF\x07\f\x02\x02\xEF\xF0\x05&\x14\x02\xF0\xF1\x07\x12\x02\x02\xF1\xFD" +
		"\x03\x02\x02\x02\xF2\xFD\x05(\x15\x02\xF3\xF4\x07\f\x02\x02\xF4\xF5\x05" +
		"(\x15\x02\xF5\xF6\x07\x12\x02\x02\xF6\xFD\x03\x02\x02\x02\xF7\xFD\x05" +
		"*\x16\x02\xF8\xF9\x07\f\x02\x02\xF9\xFA\x05*\x16\x02\xFA\xFB\x07\x12\x02" +
		"\x02\xFB\xFD\x03\x02\x02\x02\xFC\xD5\x03\x02\x02\x02\xFC\xD6\x03\x02\x02" +
		"\x02\xFC\xDA\x03\x02\x02\x02\xFC\xDB\x03\x02\x02\x02\xFC\xDC\x03\x02\x02" +
		"\x02\xFC\xDD\x03\x02\x02\x02\xFC\xDE\x03\x02\x02\x02\xFC\xDF\x03\x02\x02" +
		"\x02\xFC\xE3\x03\x02\x02\x02\xFC\xE4\x03\x02\x02\x02\xFC\xE8\x03\x02\x02" +
		"\x02\xFC\xE9\x03\x02\x02\x02\xFC\xED\x03\x02\x02\x02\xFC\xEE\x03\x02\x02" +
		"\x02\xFC\xF2\x03\x02\x02\x02\xFC\xF3\x03\x02\x02\x02\xFC\xF7\x03\x02\x02" +
		"\x02\xFC\xF8\x03\x02\x02\x02\xFD\x1D\x03\x02\x02\x02\xFE\xFF\x07\x17\x02" +
		"\x02\xFF\u0100\x07\'\x02\x02\u0100\u0101\x07\t\x02\x02\u0101\u0102\x07" +
		"\x0E\x02\x02\u0102\u0103\x07>\x02\x02\u0103\u0104\x05\x12\n\x02\u0104" +
		"\u0105\x07(\x02\x02\u0105\x1F\x03\x02\x02\x02\u0106\u0107\x07\x1E\x02" +
		"\x02\u0107\u0108\x07\'\x02\x02\u0108\u0109\x05\x12\n\x02\u0109\u010A\x07" +
		"(\x02\x02\u010A!\x03\x02\x02\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010D" +
		"\x07\'\x02\x02\u010D\u010E\x05\x12\n\x02\u010E\u010F\x07(\x02\x02\u010F" +
		"#\x03\x02\x02\x02\u0110\u0111\x07 \x02\x02\u0111\u0112\x07\'\x02\x02\u0112" +
		"\u0113\x05\x12\n\x02\u0113\u0114\x07(\x02\x02\u0114%\x03\x02\x02\x02\u0115" +
		"\u0116\x07\x1D\x02\x02\u0116\'\x03\x02\x02\x02\u0117\u0118\x07\x16\x02" +
		"\x02\u0118)\x03\x02\x02\x02\u0119\u011A\x07\x0E\x02\x02\u011A\u011E\x07" +
		"\'\x02\x02\u011B\u011D\x05\x12\n\x02\u011C\u011B\x03\x02\x02\x02\u011D" +
		"\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02" +
		"\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121" +
		"\u0130\x07(\x02\x02\u0122\u0123\x07\x14\x02\x02\u0123\u0124\x07\x0E\x02" +
		"\x02\u0124\u0128\x07\'\x02\x02\u0125\u0127\x05\x12\n\x02\u0126\u0125\x03" +
		"\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128" +
		"\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02" +
		"\x02\x02\u012B\u012C\x07(\x02\x02\u012C\u012D\x05\x04\x03\x02\u012D\u012E" +
		"\x056\x1C\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0119\x03\x02\x02\x02" +
		"\u012F\u0122\x03\x02\x02\x02\u0130+\x03\x02\x02\x02\u0131\u0132\x07!\x02" +
		"\x02\u0132\u0133\x07\'\x02\x02\u0133\u0134\x07\t\x02\x02\u0134\u0135\x07" +
		"\x0E\x02\x02\u0135\u0136\x07(\x02\x02\u0136\u0137\x05\x04\x03\x02\u0137" +
		"\u0138\x056\x1C\x02\u0138-\x03\x02\x02\x02\u0139\u013A\x07\x18\x02\x02" +
		"\u013A\u013B\x07\'\x02\x02\u013B\u013C\x07\t\x02\x02\u013C\u013D\x07\x0E" +
		"\x02\x02\u013D\u013E\x07-\x02\x02\u013E\u013F\x05\x12\n\x02\u013F\u0140" +
		"\x07(\x02\x02\u0140\u0142\x05\x04\x03\x02\u0141\u0143\x054\x1B\x02\u0142" +
		"\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02" +
		"\x02\x02\u0144\u0145\x056\x1C\x02\u0145\u0156\x03\x02\x02\x02\u0146\u0147" +
		"\x07\f\x02\x02\u0147\u0148\x07\x18\x02\x02\u0148\u0149\x07\'\x02\x02\u0149" +
		"\u014A\x07\t\x02\x02\u014A\u014B\x07\x0E\x02\x02\u014B\u014C\x07-\x02" +
		"\x02\u014C\u014D\x05\x12\n\x02\u014D\u014E\x07(\x02\x02\u014E\u014F\x07" +
		"\x12\x02\x02\u014F\u0151\x05\x04\x03\x02\u0150\u0152\x054\x1B\x02\u0151" +
		"\u0150\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0154\x056\x1C\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0139" +
		"\x03\x02\x02\x02\u0155\u0146\x03\x02\x02\x02\u0156/\x03\x02\x02\x02\u0157" +
		"\u0158\x07\x19\x02\x02\u0158\u0159\x07\'\x02\x02\u0159\u015A\x05\x12\n" +
		"\x02\u015A\u015B\x07(\x02\x02\u015B\u015F\x05\x04\x03\x02\u015C\u015E" +
		"\x052\x1A\x02\u015D\u015C\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02" +
		"\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0163\x03" +
		"\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0164\x054\x1B\x02\u0163" +
		"\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02" +
		"\x02\x02\u0165\u0166\x056\x1C\x02\u0166\u017A\x03\x02\x02\x02\u0167\u0168" +
		"\x07\f\x02\x02\u0168\u0169\x07\x19\x02\x02\u0169\u016A\x07\'\x02\x02\u016A" +
		"\u016B\x05\x12\n\x02\u016B\u016C\x07(\x02\x02\u016C\u016D\x07\x12\x02" +
		"\x02\u016D\u0171\x05\x04\x03\x02\u016E\u0170\x052\x1A\x02\u016F\u016E" +
		"\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03" +
		"\x02\x02\x02\u0174\u0176\x054\x1B\x02\u0175\u0174\x03\x02\x02\x02\u0175" +
		"\u0176\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x056\x1C" +
		"\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0157\x03\x02\x02\x02\u0179\u0167" +
		"\x03\x02\x02\x02\u017A1\x03\x02\x02\x02\u017B\u017C\x07\b\x02\x02\u017C" +
		"\u017D\x07\x1A\x02\x02\u017D\u017E\x07\'\x02\x02\u017E\u017F\x05\x12\n" +
		"\x02\u017F\u0180\x07(\x02\x02\u0180\u0181\x05\x04\x03\x02\u0181\u018C" +
		"\x03\x02\x02\x02\u0182\u0183\x07\b\x02\x02\u0183\u0184\x07\f\x02\x02\u0184" +
		"\u0185\x07\x1A\x02\x02\u0185\u0186\x07\'\x02\x02\u0186\u0187\x05\x12\n" +
		"\x02\u0187\u0188\x07(\x02\x02\u0188\u0189\x07\x12\x02\x02\u0189\u018A" +
		"\x05\x04\x03\x02\u018A\u018C\x03\x02\x02\x02\u018B\u017B\x03\x02\x02\x02" +
		"\u018B\u0182\x03\x02\x02\x02\u018C3\x03\x02\x02\x02\u018D\u018E\x07\b" +
		"\x02\x02\u018E\u018F\x07\x1B\x02\x02\u018F\u0196\x05\x04\x03\x02\u0190" +
		"\u0191\x07\b\x02\x02\u0191\u0192\x07\f\x02\x02\u0192\u0193\x07\x1B\x02" +
		"\x02\u0193\u0194\x07\x12\x02\x02\u0194\u0196\x05\x04\x03\x02\u0195\u018D" +
		"\x03\x02\x02\x02\u0195\u0190\x03\x02\x02\x02\u01965\x03\x02\x02\x02\u0197" +
		"\u0198\x07\b\x02\x02\u0198\u019E\x07\x1C\x02\x02\u0199\u019A\x07\b\x02" +
		"\x02\u019A\u019B\x07\f\x02\x02\u019B\u019C\x07\x1C\x02\x02\u019C\u019E" +
		"\x07\x12\x02\x02\u019D\u0197\x03\x02\x02\x02\u019D\u0199\x03\x02\x02\x02" +
		"\u019E7\x03\x02\x02\x02\u019F\u01A0\x07\"\x02\x02\u01A0\u01A1\x07\'\x02" +
		"\x02\u01A1\u01AA\x07\x0E\x02\x02\u01A2\u01A3\x07\t\x02\x02\u01A3\u01A6" +
		"\x07\x0E\x02\x02\u01A4\u01A5\x07>\x02\x02\u01A5\u01A7\x05\x14\v\x02\u01A6" +
		"\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02" +
		"\x02\x02\u01A8\u01A2\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA" +
		"\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD\x03\x02" +
		"\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AD\u01AE\x07(\x02\x02\u01AE\u01AF" +
		"\x05\x04\x03\x02\u01AF\u01B0\x056\x1C\x02\u01B09\x03\x02\x02\x02#ACHN" +
		"SZ^cpy\x88\xB1\xB3\xBC\xBE\xC9\xFC\u011E\u0128\u012F\u0142\u0151\u0155" +
		"\u015F\u0163\u0171\u0175\u0179\u018B\u0195\u019D\u01A6\u01AA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VelocityParser.__ATN) {
			VelocityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VelocityParser._serializedATN));
		}

		return VelocityParser.__ATN;
	}

}

export class TemplateFileContext extends ParserRuleContext {
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public EOF(): TerminalNode { return this.getToken(VelocityParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_templateFile; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterTemplateFile) {
			listener.enterTemplateFile(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitTemplateFile) {
			listener.exitTemplateFile(this);
		}
	}
}


export class TemplateContext extends ParserRuleContext {
	public Code(): TerminalNode[];
	public Code(i: number): TerminalNode;
	public Code(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.Code);
		} else {
			return this.getToken(VelocityParser.Code, i);
		}
	}
	public EscapeCode(): TerminalNode[];
	public EscapeCode(i: number): TerminalNode;
	public EscapeCode(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.EscapeCode);
		} else {
			return this.getToken(VelocityParser.EscapeCode, i);
		}
	}
	public directive(): DirectiveContext[];
	public directive(i: number): DirectiveContext;
	public directive(i?: number): DirectiveContext | DirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectiveContext);
		} else {
			return this.getRuleContext(i, DirectiveContext);
		}
	}
	public reference(): ReferenceContext[];
	public reference(i: number): ReferenceContext;
	public reference(i?: number): ReferenceContext | ReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceContext);
		} else {
			return this.getRuleContext(i, ReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_template; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public Reference(): TerminalNode { return this.getToken(VelocityParser.Reference, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.BANG, 0); }
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_reference; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public indexcall(): IndexcallContext | undefined {
		return this.tryGetRuleContext(0, IndexcallContext);
	}
	public methodcall(): MethodcallContext | undefined {
		return this.tryGetRuleContext(0, MethodcallContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_call; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
}


export class IndexcallContext extends ParserRuleContext {
	public LBRAK(): TerminalNode { return this.getToken(VelocityParser.LBRAK, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RBRAK(): TerminalNode { return this.getToken(VelocityParser.RBRAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_indexcall; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterIndexcall) {
			listener.enterIndexcall(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitIndexcall) {
			listener.exitIndexcall(this);
		}
	}
}


export class MethodcallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VelocityParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_methodcall; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterMethodcall) {
			listener.enterMethodcall(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitMethodcall) {
			listener.exitMethodcall(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VelocityParser.DOT, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.COMMA);
		} else {
			return this.getToken(VelocityParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_arglist; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterArglist) {
			listener.enterArglist(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitArglist) {
			listener.exitArglist(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RPAREN, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.OR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.AND, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.GT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.NE, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.NOT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.MINUS, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.DIV, 0); }
	public MODUL(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.MODUL, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public stringTemplate(): StringTemplateContext | undefined {
		return this.tryGetRuleContext(0, StringTemplateContext);
	}
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_expr; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.NUMBER, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_literal; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class StringTemplateContext extends ParserRuleContext {
	public DQUOTE(): TerminalNode[];
	public DQUOTE(i: number): TerminalNode;
	public DQUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.DQUOTE);
		} else {
			return this.getToken(VelocityParser.DQUOTE, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.TEXT);
		} else {
			return this.getToken(VelocityParser.TEXT, i);
		}
	}
	public ESCAPETEXT(): TerminalNode[];
	public ESCAPETEXT(i: number): TerminalNode;
	public ESCAPETEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.ESCAPETEXT);
		} else {
			return this.getToken(VelocityParser.ESCAPETEXT, i);
		}
	}
	public reference(): ReferenceContext[];
	public reference(i: number): ReferenceContext;
	public reference(i?: number): ReferenceContext | ReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceContext);
		} else {
			return this.getRuleContext(i, ReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_stringTemplate; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterStringTemplate) {
			listener.enterStringTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitStringTemplate) {
			listener.exitStringTemplate(this);
		}
	}
}


export class CollectionContext extends ParserRuleContext {
	public LBRAK(): TerminalNode { return this.getToken(VelocityParser.LBRAK, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RBRAK(): TerminalNode { return this.getToken(VelocityParser.RBRAK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.COMMA);
		} else {
			return this.getToken(VelocityParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_collection; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterCollection) {
			listener.enterCollection(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitCollection) {
			listener.exitCollection(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public LBRAK(): TerminalNode { return this.getToken(VelocityParser.LBRAK, 0); }
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.NUMBER);
		} else {
			return this.getToken(VelocityParser.NUMBER, i);
		}
	}
	public DPOINT(): TerminalNode { return this.getToken(VelocityParser.DPOINT, 0); }
	public RBRAK(): TerminalNode { return this.getToken(VelocityParser.RBRAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_range; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public Directive(): TerminalNode { return this.getToken(VelocityParser.Directive, 0); }
	public dirSet(): DirSetContext | undefined {
		return this.tryGetRuleContext(0, DirSetContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	public dirFor(): DirForContext | undefined {
		return this.tryGetRuleContext(0, DirForContext);
	}
	public dirIf(): DirIfContext | undefined {
		return this.tryGetRuleContext(0, DirIfContext);
	}
	public dirMacroDef(): DirMacroDefContext | undefined {
		return this.tryGetRuleContext(0, DirMacroDefContext);
	}
	public dirParse(): DirParseContext | undefined {
		return this.tryGetRuleContext(0, DirParseContext);
	}
	public dirDefine(): DirDefineContext | undefined {
		return this.tryGetRuleContext(0, DirDefineContext);
	}
	public dirInclude(): DirIncludeContext | undefined {
		return this.tryGetRuleContext(0, DirIncludeContext);
	}
	public dirEvaluate(): DirEvaluateContext | undefined {
		return this.tryGetRuleContext(0, DirEvaluateContext);
	}
	public dirStop(): DirStopContext | undefined {
		return this.tryGetRuleContext(0, DirStopContext);
	}
	public dirBreak(): DirBreakContext | undefined {
		return this.tryGetRuleContext(0, DirBreakContext);
	}
	public dirMacrocall(): DirMacrocallContext | undefined {
		return this.tryGetRuleContext(0, DirMacrocallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_directive; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class DirSetContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VelocityParser.SET, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public Reference(): TerminalNode { return this.getToken(VelocityParser.Reference, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public ATTRIB(): TerminalNode { return this.getToken(VelocityParser.ATTRIB, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirSet; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirSet) {
			listener.enterDirSet(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirSet) {
			listener.exitDirSet(this);
		}
	}
}


export class DirParseContext extends ParserRuleContext {
	public PARSE(): TerminalNode { return this.getToken(VelocityParser.PARSE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirParse; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirParse) {
			listener.enterDirParse(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirParse) {
			listener.exitDirParse(this);
		}
	}
}


export class DirIncludeContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(VelocityParser.INCLUDE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirInclude; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirInclude) {
			listener.enterDirInclude(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirInclude) {
			listener.exitDirInclude(this);
		}
	}
}


export class DirEvaluateContext extends ParserRuleContext {
	public EVALUATE(): TerminalNode { return this.getToken(VelocityParser.EVALUATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirEvaluate; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirEvaluate) {
			listener.enterDirEvaluate(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirEvaluate) {
			listener.exitDirEvaluate(this);
		}
	}
}


export class DirStopContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(VelocityParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirStop; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirStop) {
			listener.enterDirStop(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirStop) {
			listener.exitDirStop(this);
		}
	}
}


export class DirBreakContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(VelocityParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirBreak; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirBreak) {
			listener.enterDirBreak(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirBreak) {
			listener.exitDirBreak(this);
		}
	}
}


export class DirMacrocallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.AT, 0); }
	public template(): TemplateContext | undefined {
		return this.tryGetRuleContext(0, TemplateContext);
	}
	public dirEnd(): DirEndContext | undefined {
		return this.tryGetRuleContext(0, DirEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirMacrocall; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirMacrocall) {
			listener.enterDirMacrocall(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirMacrocall) {
			listener.exitDirMacrocall(this);
		}
	}
}


export class DirDefineContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(VelocityParser.DEFINE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public Reference(): TerminalNode { return this.getToken(VelocityParser.Reference, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public dirEnd(): DirEndContext {
		return this.getRuleContext(0, DirEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirDefine; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirDefine) {
			listener.enterDirDefine(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirDefine) {
			listener.exitDirDefine(this);
		}
	}
}


export class DirForContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(VelocityParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public Reference(): TerminalNode { return this.getToken(VelocityParser.Reference, 0); }
	public Identifier(): TerminalNode { return this.getToken(VelocityParser.Identifier, 0); }
	public IN(): TerminalNode { return this.getToken(VelocityParser.IN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public dirEnd(): DirEndContext {
		return this.getRuleContext(0, DirEndContext);
	}
	public dirElse(): DirElseContext | undefined {
		return this.tryGetRuleContext(0, DirElseContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirFor; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirFor) {
			listener.enterDirFor(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirFor) {
			listener.exitDirFor(this);
		}
	}
}


export class DirIfContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(VelocityParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public dirEnd(): DirEndContext {
		return this.getRuleContext(0, DirEndContext);
	}
	public dirElseif(): DirElseifContext[];
	public dirElseif(i: number): DirElseifContext;
	public dirElseif(i?: number): DirElseifContext | DirElseifContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirElseifContext);
		} else {
			return this.getRuleContext(i, DirElseifContext);
		}
	}
	public dirElse(): DirElseContext | undefined {
		return this.tryGetRuleContext(0, DirElseContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirIf; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirIf) {
			listener.enterDirIf(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirIf) {
			listener.exitDirIf(this);
		}
	}
}


export class DirElseifContext extends ParserRuleContext {
	public Directive(): TerminalNode { return this.getToken(VelocityParser.Directive, 0); }
	public ELSEIF(): TerminalNode { return this.getToken(VelocityParser.ELSEIF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirElseif; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirElseif) {
			listener.enterDirElseif(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirElseif) {
			listener.exitDirElseif(this);
		}
	}
}


export class DirElseContext extends ParserRuleContext {
	public Directive(): TerminalNode { return this.getToken(VelocityParser.Directive, 0); }
	public ELSE(): TerminalNode { return this.getToken(VelocityParser.ELSE, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirElse; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirElse) {
			listener.enterDirElse(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirElse) {
			listener.exitDirElse(this);
		}
	}
}


export class DirEndContext extends ParserRuleContext {
	public Directive(): TerminalNode { return this.getToken(VelocityParser.Directive, 0); }
	public END(): TerminalNode { return this.getToken(VelocityParser.END, 0); }
	public LCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.LCURLY, 0); }
	public RCURLY(): TerminalNode | undefined { return this.tryGetToken(VelocityParser.RCURLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirEnd; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirEnd) {
			listener.enterDirEnd(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirEnd) {
			listener.exitDirEnd(this);
		}
	}
}


export class DirMacroDefContext extends ParserRuleContext {
	public MACRO(): TerminalNode { return this.getToken(VelocityParser.MACRO, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VelocityParser.LPAREN, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.Identifier);
		} else {
			return this.getToken(VelocityParser.Identifier, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VelocityParser.RPAREN, 0); }
	public template(): TemplateContext {
		return this.getRuleContext(0, TemplateContext);
	}
	public dirEnd(): DirEndContext {
		return this.getRuleContext(0, DirEndContext);
	}
	public Reference(): TerminalNode[];
	public Reference(i: number): TerminalNode;
	public Reference(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.Reference);
		} else {
			return this.getToken(VelocityParser.Reference, i);
		}
	}
	public ATTRIB(): TerminalNode[];
	public ATTRIB(i: number): TerminalNode;
	public ATTRIB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VelocityParser.ATTRIB);
		} else {
			return this.getToken(VelocityParser.ATTRIB, i);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VelocityParser.RULE_dirMacroDef; }
	// @Override
	public enterRule(listener: VelocityParserListener): void {
		if (listener.enterDirMacroDef) {
			listener.enterDirMacroDef(this);
		}
	}
	// @Override
	public exitRule(listener: VelocityParserListener): void {
		if (listener.exitDirMacroDef) {
			listener.exitDirMacroDef(this);
		}
	}
}


