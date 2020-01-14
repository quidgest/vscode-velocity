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
	public static readonly Directive = 5;
	public static readonly Reference = 6;
	public static readonly BANG = 7;
	public static readonly LCURLY = 8;
	public static readonly EMPTY1 = 9;
	public static readonly Identifier = 10;
	public static readonly DOT = 11;
	public static readonly EMPTY2 = 12;
	public static readonly RCURLY = 13;
	public static readonly EMPTY3 = 14;
	public static readonly SET = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly ELSEIF = 18;
	public static readonly ELSE = 19;
	public static readonly END = 20;
	public static readonly STOP = 21;
	public static readonly PARSE = 22;
	public static readonly DIR_WhiteSpace = 23;
	public static readonly DIRC_WhiteSpace = 24;
	public static readonly NUMBER = 25;
	public static readonly BOOL = 26;
	public static readonly LPAREN = 27;
	public static readonly RPAREN = 28;
	public static readonly DPOINT = 29;
	public static readonly COMMA = 30;
	public static readonly DQUOTE = 31;
	public static readonly STRING = 32;
	public static readonly IN = 33;
	public static readonly LBRAK = 34;
	public static readonly RBRAK = 35;
	public static readonly PLUS = 36;
	public static readonly MINUS = 37;
	public static readonly DIV = 38;
	public static readonly MULT = 39;
	public static readonly MODUL = 40;
	public static readonly AND = 41;
	public static readonly OR = 42;
	public static readonly NOT = 43;
	public static readonly LT = 44;
	public static readonly GT = 45;
	public static readonly LE = 46;
	public static readonly GE = 47;
	public static readonly EQ = 48;
	public static readonly NE = 49;
	public static readonly ATTRIB = 50;
	public static readonly Whitespace = 51;
	public static readonly Newline = 52;
	public static readonly UNKNOWN = 53;
	public static readonly TEXT = 54;
	public static readonly ESCAPETEXT = 55;
	public static readonly RULE_templateFile = 0;
	public static readonly RULE_template = 1;
	public static readonly RULE_reference = 2;
	public static readonly RULE_call = 3;
	public static readonly RULE_methodcall = 4;
	public static readonly RULE_functioncall = 5;
	public static readonly RULE_arglist = 6;
	public static readonly RULE_expr = 7;
	public static readonly RULE_literal = 8;
	public static readonly RULE_stringTemplate = 9;
	public static readonly RULE_collection = 10;
	public static readonly RULE_directive = 11;
	public static readonly RULE_dirSet = 12;
	public static readonly RULE_dirParse = 13;
	public static readonly RULE_dirStop = 14;
	public static readonly RULE_dirMacrocall = 15;
	public static readonly RULE_dirFor = 16;
	public static readonly RULE_dirIf = 17;
	public static readonly RULE_dirElseif = 18;
	public static readonly RULE_dirElse = 19;
	public static readonly RULE_dirEnd = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"templateFile", "template", "reference", "call", "methodcall", "functioncall", 
		"arglist", "expr", "literal", "stringTemplate", "collection", "directive", 
		"dirSet", "dirParse", "dirStop", "dirMacrocall", "dirFor", "dirIf", "dirElseif", 
		"dirElse", "dirEnd",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#'", "'$'", "'!'", 
		"'{'", undefined, undefined, "'.'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'('", "')'", "'..'", "','", 
		undefined, undefined, "'in'", "'['", "']'", "'+'", "'-'", "'/'", "'*'", 
		"'%'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Code", "EscapeCode", "BlockComment", "LineComment", "Directive", 
		"Reference", "BANG", "LCURLY", "EMPTY1", "Identifier", "DOT", "EMPTY2", 
		"RCURLY", "EMPTY3", "SET", "FOR", "IF", "ELSEIF", "ELSE", "END", "STOP", 
		"PARSE", "DIR_WhiteSpace", "DIRC_WhiteSpace", "NUMBER", "BOOL", "LPAREN", 
		"RPAREN", "DPOINT", "COMMA", "DQUOTE", "STRING", "IN", "LBRAK", "RBRAK", 
		"PLUS", "MINUS", "DIV", "MULT", "MODUL", "AND", "OR", "NOT", "LT", "GT", 
		"LE", "GE", "EQ", "NE", "ATTRIB", "Whitespace", "Newline", "UNKNOWN", 
		"TEXT", "ESCAPETEXT",
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
			this.state = 42;
			this.template();
			this.state = 43;
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
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case VelocityParser.Code:
						{
						this.state = 45;
						this.match(VelocityParser.Code);
						}
						break;
					case VelocityParser.EscapeCode:
						{
						this.state = 46;
						this.match(VelocityParser.EscapeCode);
						}
						break;
					case VelocityParser.Directive:
						{
						this.state = 47;
						this.directive();
						}
						break;
					case VelocityParser.Reference:
						{
						this.state = 48;
						this.reference();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 53;
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
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.match(VelocityParser.Reference);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VelocityParser.BANG) {
					{
					this.state = 55;
					this.match(VelocityParser.BANG);
					}
				}

				this.state = 58;
				this.match(VelocityParser.Identifier);
				this.state = 62;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 59;
						this.call();
						}
						}
					}
					this.state = 64;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.match(VelocityParser.Reference);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VelocityParser.BANG) {
					{
					this.state = 66;
					this.match(VelocityParser.BANG);
					}
				}

				this.state = 69;
				this.match(VelocityParser.LCURLY);
				this.state = 70;
				this.match(VelocityParser.Identifier);
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VelocityParser.DOT) {
					{
					{
					this.state = 71;
					this.call();
					}
					}
					this.state = 76;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 77;
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
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.methodcall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
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
	public methodcall(): MethodcallContext {
		let _localctx: MethodcallContext = new MethodcallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VelocityParser.RULE_methodcall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(VelocityParser.DOT);
			this.state = 85;
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
		this.enterRule(_localctx, 10, VelocityParser.RULE_functioncall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(VelocityParser.DOT);
			this.state = 88;
			this.match(VelocityParser.Identifier);
			this.state = 89;
			this.match(VelocityParser.LPAREN);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VelocityParser.Reference) | (1 << VelocityParser.NUMBER) | (1 << VelocityParser.BOOL) | (1 << VelocityParser.LPAREN) | (1 << VelocityParser.DQUOTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VelocityParser.STRING - 32)) | (1 << (VelocityParser.LBRAK - 32)) | (1 << (VelocityParser.NOT - 32)))) !== 0)) {
				{
				this.state = 90;
				this.arglist();
				}
			}

			this.state = 93;
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
		this.enterRule(_localctx, 12, VelocityParser.RULE_arglist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.expr(0);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.COMMA) {
				{
				{
				this.state = 96;
				this.match(VelocityParser.COMMA);
				this.state = 97;
				this.expr(0);
				}
				}
				this.state = 102;
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
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, VelocityParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.LPAREN:
				{
				this.state = 104;
				this.match(VelocityParser.LPAREN);
				this.state = 105;
				this.expr(0);
				this.state = 106;
				this.match(VelocityParser.RPAREN);
				}
				break;
			case VelocityParser.NOT:
				{
				this.state = 108;
				this.match(VelocityParser.NOT);
				this.state = 109;
				this.expr(10);
				}
				break;
			case VelocityParser.Reference:
				{
				this.state = 110;
				this.reference();
				}
				break;
			case VelocityParser.NUMBER:
			case VelocityParser.BOOL:
			case VelocityParser.STRING:
				{
				this.state = 111;
				this.literal();
				}
				break;
			case VelocityParser.DQUOTE:
				{
				this.state = 112;
				this.stringTemplate();
				}
				break;
			case VelocityParser.LBRAK:
				{
				this.state = 113;
				this.collection();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 155;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 116;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 117;
						this.match(VelocityParser.OR);
						this.state = 118;
						this.expr(19);
						}
						break;

					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 119;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 120;
						this.match(VelocityParser.AND);
						this.state = 121;
						this.expr(18);
						}
						break;

					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 122;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 123;
						this.match(VelocityParser.LE);
						this.state = 124;
						this.expr(17);
						}
						break;

					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 125;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 126;
						this.match(VelocityParser.LT);
						this.state = 127;
						this.expr(16);
						}
						break;

					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 128;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 129;
						this.match(VelocityParser.GE);
						this.state = 130;
						this.expr(15);
						}
						break;

					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 131;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 132;
						this.match(VelocityParser.GT);
						this.state = 133;
						this.expr(14);
						}
						break;

					case 7:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 134;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 135;
						this.match(VelocityParser.EQ);
						this.state = 136;
						this.expr(13);
						}
						break;

					case 8:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 137;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 138;
						this.match(VelocityParser.NE);
						this.state = 139;
						this.expr(12);
						}
						break;

					case 9:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 140;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 141;
						this.match(VelocityParser.PLUS);
						this.state = 142;
						this.expr(10);
						}
						break;

					case 10:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 143;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 144;
						this.match(VelocityParser.MINUS);
						this.state = 145;
						this.expr(9);
						}
						break;

					case 11:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 146;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 147;
						this.match(VelocityParser.MULT);
						this.state = 148;
						this.expr(8);
						}
						break;

					case 12:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 149;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 150;
						this.match(VelocityParser.DIV);
						this.state = 151;
						this.expr(7);
						}
						break;

					case 13:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, VelocityParser.RULE_expr);
						this.state = 152;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 153;
						this.match(VelocityParser.MODUL);
						this.state = 154;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 159;
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
		this.enterRule(_localctx, 16, VelocityParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (VelocityParser.NUMBER - 25)) | (1 << (VelocityParser.BOOL - 25)) | (1 << (VelocityParser.STRING - 25)))) !== 0))) {
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
		this.enterRule(_localctx, 18, VelocityParser.RULE_stringTemplate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(VelocityParser.DQUOTE);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.Reference || _la === VelocityParser.TEXT || _la === VelocityParser.ESCAPETEXT) {
				{
				this.state = 166;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VelocityParser.TEXT:
					{
					this.state = 163;
					this.match(VelocityParser.TEXT);
					}
					break;
				case VelocityParser.ESCAPETEXT:
					{
					this.state = 164;
					this.match(VelocityParser.ESCAPETEXT);
					}
					break;
				case VelocityParser.Reference:
					{
					this.state = 165;
					this.reference();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 171;
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
		this.enterRule(_localctx, 20, VelocityParser.RULE_collection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(VelocityParser.LBRAK);
			this.state = 174;
			this.expr(0);
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VelocityParser.COMMA) {
				{
				{
				this.state = 175;
				this.match(VelocityParser.COMMA);
				this.state = 176;
				this.expr(0);
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 182;
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
		this.enterRule(_localctx, 22, VelocityParser.RULE_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(VelocityParser.Directive);
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 185;
				this.dirSet();
				}
				break;

			case 2:
				{
				this.state = 186;
				this.match(VelocityParser.LCURLY);
				this.state = 187;
				this.dirSet();
				this.state = 188;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 3:
				{
				this.state = 190;
				this.dirFor();
				}
				break;

			case 4:
				{
				this.state = 191;
				this.dirIf();
				}
				break;

			case 5:
				{
				this.state = 192;
				this.dirParse();
				}
				break;

			case 6:
				{
				this.state = 193;
				this.match(VelocityParser.LCURLY);
				this.state = 194;
				this.dirParse();
				this.state = 195;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 7:
				{
				this.state = 197;
				this.dirStop();
				}
				break;

			case 8:
				{
				this.state = 198;
				this.match(VelocityParser.LCURLY);
				this.state = 199;
				this.dirStop();
				this.state = 200;
				this.match(VelocityParser.RCURLY);
				}
				break;

			case 9:
				{
				this.state = 202;
				this.dirMacrocall();
				}
				break;

			case 10:
				{
				this.state = 203;
				this.match(VelocityParser.LCURLY);
				this.state = 204;
				this.dirMacrocall();
				this.state = 205;
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
		this.enterRule(_localctx, 24, VelocityParser.RULE_dirSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(VelocityParser.SET);
			this.state = 210;
			this.match(VelocityParser.LPAREN);
			this.state = 211;
			this.match(VelocityParser.Reference);
			this.state = 212;
			this.match(VelocityParser.Identifier);
			this.state = 213;
			this.match(VelocityParser.ATTRIB);
			this.state = 214;
			this.expr(0);
			this.state = 215;
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
		this.enterRule(_localctx, 26, VelocityParser.RULE_dirParse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(VelocityParser.PARSE);
			this.state = 218;
			this.match(VelocityParser.LPAREN);
			this.state = 219;
			this.expr(0);
			this.state = 220;
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
		this.enterRule(_localctx, 28, VelocityParser.RULE_dirStop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
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
	public dirMacrocall(): DirMacrocallContext {
		let _localctx: DirMacrocallContext = new DirMacrocallContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VelocityParser.RULE_dirMacrocall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(VelocityParser.Identifier);
			this.state = 225;
			this.match(VelocityParser.LPAREN);
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VelocityParser.Reference) | (1 << VelocityParser.NUMBER) | (1 << VelocityParser.BOOL) | (1 << VelocityParser.LPAREN) | (1 << VelocityParser.DQUOTE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VelocityParser.STRING - 32)) | (1 << (VelocityParser.LBRAK - 32)) | (1 << (VelocityParser.NOT - 32)))) !== 0)) {
				{
				this.state = 226;
				this.arglist();
				}
			}

			this.state = 229;
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
	public dirFor(): DirForContext {
		let _localctx: DirForContext = new DirForContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VelocityParser.RULE_dirFor);
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 231;
				this.match(VelocityParser.FOR);
				this.state = 232;
				this.match(VelocityParser.LPAREN);
				this.state = 233;
				this.match(VelocityParser.Reference);
				this.state = 234;
				this.match(VelocityParser.Identifier);
				this.state = 235;
				this.match(VelocityParser.IN);
				this.state = 236;
				this.expr(0);
				this.state = 237;
				this.match(VelocityParser.RPAREN);
				this.state = 238;
				this.template();
				this.state = 239;
				this.dirEnd();
				}
				break;
			case VelocityParser.LCURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.match(VelocityParser.LCURLY);
				this.state = 242;
				this.match(VelocityParser.FOR);
				this.state = 243;
				this.match(VelocityParser.LPAREN);
				this.state = 244;
				this.match(VelocityParser.Reference);
				this.state = 245;
				this.match(VelocityParser.Identifier);
				this.state = 246;
				this.match(VelocityParser.IN);
				this.state = 247;
				this.expr(0);
				this.state = 248;
				this.match(VelocityParser.RPAREN);
				this.state = 249;
				this.match(VelocityParser.RCURLY);
				this.state = 250;
				this.template();
				this.state = 251;
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
		this.enterRule(_localctx, 34, VelocityParser.RULE_dirIf);
		try {
			let _alt: number;
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VelocityParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 255;
				this.match(VelocityParser.IF);
				this.state = 256;
				this.match(VelocityParser.LPAREN);
				this.state = 257;
				this.expr(0);
				this.state = 258;
				this.match(VelocityParser.RPAREN);
				this.state = 259;
				this.template();
				this.state = 263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 260;
						this.dirElseif();
						}
						}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 266;
					this.dirElse();
					}
					break;
				}
				this.state = 269;
				this.dirEnd();
				}
				break;
			case VelocityParser.LCURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.match(VelocityParser.LCURLY);
				this.state = 272;
				this.match(VelocityParser.IF);
				this.state = 273;
				this.match(VelocityParser.LPAREN);
				this.state = 274;
				this.expr(0);
				this.state = 275;
				this.match(VelocityParser.RPAREN);
				this.state = 276;
				this.match(VelocityParser.RCURLY);
				this.state = 277;
				this.template();
				this.state = 281;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 278;
						this.dirElseif();
						}
						}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				}
				this.state = 285;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 284;
					this.dirElse();
					}
					break;
				}
				this.state = 287;
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
		this.enterRule(_localctx, 36, VelocityParser.RULE_dirElseif);
		try {
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.match(VelocityParser.Directive);
				this.state = 292;
				this.match(VelocityParser.ELSEIF);
				this.state = 293;
				this.match(VelocityParser.LPAREN);
				this.state = 294;
				this.expr(0);
				this.state = 295;
				this.match(VelocityParser.RPAREN);
				this.state = 296;
				this.template();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 298;
				this.match(VelocityParser.Directive);
				this.state = 299;
				this.match(VelocityParser.LCURLY);
				this.state = 300;
				this.match(VelocityParser.ELSEIF);
				this.state = 301;
				this.match(VelocityParser.LPAREN);
				this.state = 302;
				this.expr(0);
				this.state = 303;
				this.match(VelocityParser.RPAREN);
				this.state = 304;
				this.match(VelocityParser.RCURLY);
				this.state = 305;
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
		this.enterRule(_localctx, 38, VelocityParser.RULE_dirElse);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.match(VelocityParser.Directive);
				this.state = 310;
				this.match(VelocityParser.ELSE);
				this.state = 311;
				this.template();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 312;
				this.match(VelocityParser.Directive);
				this.state = 313;
				this.match(VelocityParser.LCURLY);
				this.state = 314;
				this.match(VelocityParser.ELSE);
				this.state = 315;
				this.match(VelocityParser.RCURLY);
				this.state = 316;
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
		this.enterRule(_localctx, 40, VelocityParser.RULE_dirEnd);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.match(VelocityParser.Directive);
				this.state = 320;
				this.match(VelocityParser.END);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 321;
				this.match(VelocityParser.Directive);
				this.state = 322;
				this.match(VelocityParser.LCURLY);
				this.state = 323;
				this.match(VelocityParser.END);
				this.state = 324;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 18);

		case 1:
			return this.precpred(this._ctx, 17);

		case 2:
			return this.precpred(this._ctx, 16);

		case 3:
			return this.precpred(this._ctx, 15);

		case 4:
			return this.precpred(this._ctx, 14);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 9);

		case 9:
			return this.precpred(this._ctx, 8);

		case 10:
			return this.precpred(this._ctx, 7);

		case 11:
			return this.precpred(this._ctx, 6);

		case 12:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u014A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E\x037\v\x03" +
		"\x03\x04\x03\x04\x05\x04;\n\x04\x03\x04\x03\x04\x07\x04?\n\x04\f\x04\x0E" +
		"\x04B\v\x04\x03\x04\x03\x04\x05\x04F\n\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04K\n\x04\f\x04\x0E\x04N\v\x04\x03\x04\x05\x04Q\n\x04\x03\x05\x03\x05" +
		"\x05\x05U\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07^\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\be\n\b\f\b\x0E\b" +
		"h\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\tu\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x9E\n\t\f\t\x0E\t\xA1\v\t\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x07\f\xB4\n\f\f\f\x0E\f\xB7\v\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\xD2\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\xE6\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u0100\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x07\x13\u0108\n\x13\f\x13\x0E\x13\u010B\v\x13\x03\x13\x05\x13\u010E" +
		"\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u011A\n\x13\f\x13\x0E\x13\u011D\v\x13\x03\x13" +
		"\x05\x13\u0120\n\x13\x03\x13\x03\x13\x05\x13\u0124\n\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0136\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0140\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0148\n\x16\x03" +
		"\x16\x02\x02\x03\x10\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02\x02\x03\x04\x02\x1B\x1C\"\"\x02\u0169\x02" +
		",\x03\x02\x02\x02\x045\x03\x02\x02\x02\x06P\x03\x02\x02\x02\bT\x03\x02" +
		"\x02\x02\nV\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0Ea\x03\x02\x02\x02\x10" +
		"t\x03\x02\x02\x02\x12\xA2\x03\x02\x02\x02\x14\xA4\x03\x02\x02\x02\x16" +
		"\xAF\x03\x02\x02\x02\x18\xBA\x03\x02\x02\x02\x1A\xD3\x03\x02\x02\x02\x1C" +
		"\xDB\x03\x02\x02\x02\x1E\xE0\x03\x02\x02\x02 \xE2\x03\x02\x02\x02\"\xFF" +
		"\x03\x02\x02\x02$\u0123\x03\x02\x02\x02&\u0135\x03\x02\x02\x02(\u013F" +
		"\x03\x02\x02\x02*\u0147\x03\x02\x02\x02,-\x05\x04\x03\x02-.\x07\x02\x02" +
		"\x03.\x03\x03\x02\x02\x02/4\x07\x03\x02\x0204\x07\x04\x02\x0214\x05\x18" +
		"\r\x0224\x05\x06\x04\x023/\x03\x02\x02\x0230\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02" +
		"\x02\x026\x05\x03\x02\x02\x0275\x03\x02\x02\x028:\x07\b\x02\x029;\x07" +
		"\t\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<@\x07" +
		"\f\x02\x02=?\x05\b\x05\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02" +
		"\x02\x02@A\x03\x02\x02\x02AQ\x03\x02\x02\x02B@\x03\x02\x02\x02CE\x07\b" +
		"\x02\x02DF\x07\t\x02\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02" +
		"\x02\x02GH\x07\n\x02\x02HL\x07\f\x02\x02IK\x05\b\x05\x02JI\x03\x02\x02" +
		"\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x03\x02\x02" +
		"\x02NL\x03\x02\x02\x02OQ\x07\x0F\x02\x02P8\x03\x02\x02\x02PC\x03\x02\x02" +
		"\x02Q\x07\x03\x02\x02\x02RU\x05\n\x06\x02SU\x05\f\x07\x02TR\x03\x02\x02" +
		"\x02TS\x03\x02\x02\x02U\t\x03\x02\x02\x02VW\x07\r\x02\x02WX\x07\f\x02" +
		"\x02X\v\x03\x02\x02\x02YZ\x07\r\x02\x02Z[\x07\f\x02\x02[]\x07\x1D\x02" +
		"\x02\\^\x05\x0E\b\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_`\x07\x1E\x02\x02`\r\x03\x02\x02\x02af\x05\x10\t\x02bc\x07 \x02\x02" +
		"ce\x05\x10\t\x02db\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02g\x0F\x03\x02\x02\x02hf\x03\x02\x02\x02ij\b\t\x01\x02" +
		"jk\x07\x1D\x02\x02kl\x05\x10\t\x02lm\x07\x1E\x02\x02mu\x03\x02\x02\x02" +
		"no\x07-\x02\x02ou\x05\x10\t\fpu\x05\x06\x04\x02qu\x05\x12\n\x02ru\x05" +
		"\x14\v\x02su\x05\x16\f\x02ti\x03\x02\x02\x02tn\x03\x02\x02\x02tp\x03\x02" +
		"\x02\x02tq\x03\x02\x02\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02u\x9F\x03" +
		"\x02\x02\x02vw\f\x14\x02\x02wx\x07,\x02\x02x\x9E\x05\x10\t\x15yz\f\x13" +
		"\x02\x02z{\x07+\x02\x02{\x9E\x05\x10\t\x14|}\f\x12\x02\x02}~\x070\x02" +
		"\x02~\x9E\x05\x10\t\x13\x7F\x80\f\x11\x02\x02\x80\x81\x07.\x02\x02\x81" +
		"\x9E\x05\x10\t\x12\x82\x83\f\x10\x02\x02\x83\x84\x071\x02\x02\x84\x9E" +
		"\x05\x10\t\x11\x85\x86\f\x0F\x02\x02\x86\x87\x07/\x02\x02\x87\x9E\x05" +
		"\x10\t\x10\x88\x89\f\x0E\x02\x02\x89\x8A\x072\x02\x02\x8A\x9E\x05\x10" +
		"\t\x0F\x8B\x8C\f\r\x02\x02\x8C\x8D\x073\x02\x02\x8D\x9E\x05\x10\t\x0E" +
		"\x8E\x8F\f\v\x02\x02\x8F\x90\x07&\x02\x02\x90\x9E\x05\x10\t\f\x91\x92" +
		"\f\n\x02\x02\x92\x93\x07\'\x02\x02\x93\x9E\x05\x10\t\v\x94\x95\f\t\x02" +
		"\x02\x95\x96\x07)\x02\x02\x96\x9E\x05\x10\t\n\x97\x98\f\b\x02\x02\x98" +
		"\x99\x07(\x02\x02\x99\x9E\x05\x10\t\t\x9A\x9B\f\x07\x02\x02\x9B\x9C\x07" +
		"*\x02\x02\x9C\x9E\x05\x10\t\b\x9Dv\x03\x02\x02\x02\x9Dy\x03\x02\x02\x02" +
		"\x9D|\x03\x02\x02\x02\x9D\x7F\x03\x02\x02\x02\x9D\x82\x03\x02\x02\x02" +
		"\x9D\x85\x03\x02\x02\x02\x9D\x88\x03\x02\x02\x02\x9D\x8B\x03\x02\x02\x02" +
		"\x9D\x8E\x03\x02\x02\x02\x9D\x91\x03\x02\x02\x02\x9D\x94\x03\x02\x02\x02" +
		"\x9D\x97\x03\x02\x02\x02\x9D\x9A\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02" +
		"\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x11\x03\x02\x02\x02" +
		"\xA1\x9F\x03\x02\x02\x02\xA2\xA3\t\x02\x02\x02\xA3\x13\x03\x02\x02\x02" +
		"\xA4\xAA\x07!\x02\x02\xA5\xA9\x078\x02\x02\xA6\xA9\x079\x02\x02\xA7\xA9" +
		"\x05\x06\x04\x02\xA8\xA5\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA7" +
		"\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB" +
		"\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE" +
		"\x07!\x02\x02\xAE\x15\x03\x02\x02\x02\xAF\xB0\x07$\x02\x02\xB0\xB5\x05" +
		"\x10\t\x02\xB1\xB2\x07 \x02\x02\xB2\xB4\x05\x10\t\x02\xB3\xB1\x03\x02" +
		"\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02" +
		"\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\x07%" +
		"\x02\x02\xB9\x17\x03\x02\x02\x02\xBA\xD1\x07\x07\x02\x02\xBB\xD2\x05\x1A" +
		"\x0E\x02\xBC\xBD\x07\n\x02\x02\xBD\xBE\x05\x1A\x0E\x02\xBE\xBF\x07\x0F" +
		"\x02\x02\xBF\xD2\x03\x02\x02\x02\xC0\xD2\x05\"\x12\x02\xC1\xD2\x05$\x13" +
		"\x02\xC2\xD2\x05\x1C\x0F\x02\xC3\xC4\x07\n\x02\x02\xC4\xC5\x05\x1C\x0F" +
		"\x02\xC5\xC6\x07\x0F\x02\x02\xC6\xD2\x03\x02\x02\x02\xC7\xD2\x05\x1E\x10" +
		"\x02\xC8\xC9\x07\n\x02\x02\xC9\xCA\x05\x1E\x10\x02\xCA\xCB\x07\x0F\x02" +
		"\x02\xCB\xD2\x03\x02\x02\x02\xCC\xD2\x05 \x11\x02\xCD\xCE\x07\n\x02\x02" +
		"\xCE\xCF\x05 \x11\x02\xCF\xD0\x07\x0F\x02\x02\xD0\xD2\x03\x02\x02\x02" +
		"\xD1\xBB\x03\x02\x02\x02\xD1\xBC\x03\x02\x02\x02\xD1\xC0\x03\x02\x02\x02" +
		"\xD1\xC1\x03\x02\x02\x02\xD1\xC2\x03\x02\x02\x02\xD1\xC3\x03\x02\x02\x02" +
		"\xD1\xC7\x03\x02\x02\x02\xD1\xC8\x03\x02\x02\x02\xD1\xCC\x03\x02\x02\x02" +
		"\xD1\xCD\x03\x02\x02\x02\xD2\x19\x03\x02\x02\x02\xD3\xD4\x07\x11\x02\x02" +
		"\xD4\xD5\x07\x1D\x02\x02\xD5\xD6\x07\b\x02\x02\xD6\xD7\x07\f\x02\x02\xD7" +
		"\xD8\x074\x02\x02\xD8\xD9\x05\x10\t\x02\xD9\xDA\x07\x1E\x02\x02\xDA\x1B" +
		"\x03\x02\x02\x02\xDB\xDC\x07\x18\x02\x02\xDC\xDD\x07\x1D\x02\x02\xDD\xDE" +
		"\x05\x10\t\x02\xDE\xDF\x07\x1E\x02\x02\xDF\x1D\x03\x02\x02\x02\xE0\xE1" +
		"\x07\x17\x02\x02\xE1\x1F\x03\x02\x02\x02\xE2\xE3\x07\f\x02\x02\xE3\xE5" +
		"\x07\x1D\x02\x02\xE4\xE6\x05\x0E\b\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07\x1E\x02\x02\xE8!" +
		"\x03\x02\x02\x02\xE9\xEA\x07\x12\x02\x02\xEA\xEB\x07\x1D\x02\x02\xEB\xEC" +
		"\x07\b\x02\x02\xEC\xED\x07\f\x02\x02\xED\xEE\x07#\x02\x02\xEE\xEF\x05" +
		"\x10\t\x02\xEF\xF0\x07\x1E\x02\x02\xF0\xF1\x05\x04\x03\x02\xF1\xF2\x05" +
		"*\x16\x02\xF2\u0100\x03\x02\x02\x02\xF3\xF4\x07\n\x02\x02\xF4\xF5\x07" +
		"\x12\x02\x02\xF5\xF6\x07\x1D\x02\x02\xF6\xF7\x07\b\x02\x02\xF7\xF8\x07" +
		"\f\x02\x02\xF8\xF9\x07#\x02\x02\xF9\xFA\x05\x10\t\x02\xFA\xFB\x07\x1E" +
		"\x02\x02\xFB\xFC\x07\x0F\x02\x02\xFC\xFD\x05\x04\x03\x02\xFD\xFE\x05*" +
		"\x16\x02\xFE\u0100\x03\x02\x02\x02\xFF\xE9\x03\x02\x02\x02\xFF\xF3\x03" +
		"\x02\x02\x02\u0100#\x03\x02\x02\x02\u0101\u0102\x07\x13\x02\x02\u0102" +
		"\u0103\x07\x1D\x02\x02\u0103\u0104\x05\x10\t\x02\u0104\u0105\x07\x1E\x02" +
		"\x02\u0105\u0109\x05\x04\x03\x02\u0106\u0108\x05&\x14\x02\u0107\u0106" +
		"\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03" +
		"\x02\x02\x02\u010C\u010E\x05(\x15\x02\u010D\u010C\x03\x02\x02\x02\u010D" +
		"\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x05*\x16" +
		"\x02\u0110\u0124\x03\x02\x02\x02\u0111\u0112\x07\n\x02\x02\u0112\u0113" +
		"\x07\x13\x02\x02\u0113\u0114\x07\x1D\x02\x02\u0114\u0115\x05\x10\t\x02" +
		"\u0115\u0116\x07\x1E\x02\x02\u0116\u0117\x07\x0F\x02\x02\u0117\u011B\x05" +
		"\x04\x03\x02\u0118\u011A\x05&\x14\x02\u0119\u0118\x03\x02\x02\x02\u011A" +
		"\u011D\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E" +
		"\u0120\x05(\x15\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02" +
		"\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x05*\x16\x02\u0122\u0124" +
		"\x03\x02\x02\x02\u0123\u0101\x03\x02\x02\x02\u0123\u0111\x03\x02\x02\x02" +
		"\u0124%\x03\x02\x02\x02\u0125\u0126\x07\x07\x02\x02\u0126\u0127\x07\x14" +
		"\x02\x02\u0127\u0128\x07\x1D\x02\x02\u0128\u0129\x05\x10\t\x02\u0129\u012A" +
		"\x07\x1E\x02\x02\u012A\u012B\x05\x04\x03\x02\u012B\u0136\x03\x02\x02\x02" +
		"\u012C\u012D\x07\x07\x02\x02\u012D\u012E\x07\n\x02\x02\u012E\u012F\x07" +
		"\x14\x02\x02\u012F\u0130\x07\x1D\x02\x02\u0130\u0131\x05\x10\t\x02\u0131" +
		"\u0132\x07\x1E\x02\x02\u0132\u0133\x07\x0F\x02\x02\u0133\u0134\x05\x04" +
		"\x03\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0125\x03\x02\x02\x02\u0135" +
		"\u012C\x03\x02\x02\x02\u0136\'\x03\x02\x02\x02\u0137\u0138\x07\x07\x02" +
		"\x02\u0138\u0139\x07\x15\x02\x02\u0139\u0140\x05\x04\x03\x02\u013A\u013B" +
		"\x07\x07\x02\x02\u013B\u013C\x07\n\x02\x02\u013C\u013D\x07\x15\x02\x02" +
		"\u013D\u013E\x07\x0F\x02\x02\u013E\u0140\x05\x04\x03\x02\u013F\u0137\x03" +
		"\x02\x02\x02\u013F\u013A\x03\x02\x02\x02\u0140)\x03\x02\x02\x02\u0141" +
		"\u0142\x07\x07\x02\x02\u0142\u0148\x07\x16\x02\x02\u0143\u0144\x07\x07" +
		"\x02\x02\u0144\u0145\x07\n\x02\x02\u0145\u0146\x07\x16\x02\x02\u0146\u0148" +
		"\x07\x0F\x02\x02\u0147\u0141\x03\x02\x02\x02\u0147\u0143\x03\x02\x02\x02" +
		"\u0148+\x03\x02\x02\x02\x1D35:@ELPT]ft\x9D\x9F\xA8\xAA\xB5\xD1\xE5\xFF" +
		"\u0109\u010D\u011B\u011F\u0123\u0135\u013F\u0147";
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
	public dirParse(): DirParseContext | undefined {
		return this.tryGetRuleContext(0, DirParseContext);
	}
	public dirStop(): DirStopContext | undefined {
		return this.tryGetRuleContext(0, DirStopContext);
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


export class DirMacrocallContext extends ParserRuleContext {
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


