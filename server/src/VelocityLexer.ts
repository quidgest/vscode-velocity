// Generated from ../syntaxes/VelocityLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class VelocityLexer extends Lexer {
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
	public static readonly PIPE = 17;
	public static readonly VTL_UNKNOWN0 = 18;
	public static readonly EMPTY4 = 19;
	public static readonly AT = 20;
	public static readonly EMPTYD3 = 21;
	public static readonly BREAK = 22;
	public static readonly SET = 23;
	public static readonly FOR = 24;
	public static readonly IF = 25;
	public static readonly ELSEIF = 26;
	public static readonly ELSE = 27;
	public static readonly END = 28;
	public static readonly STOP = 29;
	public static readonly PARSE = 30;
	public static readonly INCLUDE = 31;
	public static readonly EVALUATE = 32;
	public static readonly DEFINE = 33;
	public static readonly MACRO = 34;
	public static readonly DIR_WhiteSpace = 35;
	public static readonly VTL_UNKNOWN1 = 36;
	public static readonly NUMBER = 37;
	public static readonly BOOL = 38;
	public static readonly LPAREN = 39;
	public static readonly RPAREN = 40;
	public static readonly DPOINT = 41;
	public static readonly COLON = 42;
	public static readonly COMMA = 43;
	public static readonly DQUOTE = 44;
	public static readonly STRING = 45;
	public static readonly IN = 46;
	public static readonly LBRAK = 47;
	public static readonly RBRAK = 48;
	public static readonly PLUS = 49;
	public static readonly MINUS = 50;
	public static readonly DIV = 51;
	public static readonly MULT = 52;
	public static readonly MODUL = 53;
	public static readonly AND = 54;
	public static readonly OR = 55;
	public static readonly NOT = 56;
	public static readonly LT = 57;
	public static readonly GT = 58;
	public static readonly LE = 59;
	public static readonly GE = 60;
	public static readonly EQ = 61;
	public static readonly NE = 62;
	public static readonly ATTRIB = 63;
	public static readonly Whitespace = 64;
	public static readonly Newline = 65;
	public static readonly TEXT = 66;
	public static readonly ESCAPETEXT = 67;
	public static readonly COMMENTS = 2;
	public static readonly MODEUNPARSED = 1;
	public static readonly MODEPREREF = 2;
	public static readonly MODEREF = 3;
	public static readonly MODEREF2 = 4;
	public static readonly MODEREF3 = 5;
	public static readonly MODEREFCURLY2 = 6;
	public static readonly MODELITERAL = 7;
	public static readonly MODEPREDIR = 8;
	public static readonly MODEDIR = 9;
	public static readonly MODEDIRCURLY = 10;
	public static readonly MODEVTL = 11;
	public static readonly MODESTR = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "MODEUNPARSED", "MODEPREREF", "MODEREF", "MODEREF2", "MODEREF3", 
		"MODEREFCURLY2", "MODELITERAL", "MODEPREDIR", "MODEDIR", "MODEDIRCURLY", 
		"MODEVTL", "MODESTR",
	];

	public static readonly ruleNames: string[] = [
		"FragIdentifier", "Nondigit", "Digit", "Code", "EscapeCode", "BlockComment", 
		"LineComment", "UnparsedStart", "Directive", "Reference", "UnparsedEnd", 
		"UNP_Code", "UNP_Code1", "UNP_Code2", "BANG", "LCURLY", "EMPTY1", "Identifier", 
		"REF_LPAREN", "EMPTY2", "DOT", "REF_LBRAK", "EMPTY3", "RCURLY", "PIPE", 
		"VTL_UNKNOWN0", "LIT_NUMBER", "LIT_BOOL", "LIT_STRING", "EMPTY4", "DIR_LCURLY", 
		"AT", "EMPTYD3", "BREAK", "SET", "FOR", "IF", "ELSEIF", "ELSE", "END", 
		"STOP", "PARSE", "INCLUDE", "EVALUATE", "DEFINE", "MACRO", "DIR_LPAREN", 
		"Function", "DIR_WhiteSpace", "DIRC_RCURLY", "VTL_UNKNOWN1", "NUMBER", 
		"BOOL", "VTL_Reference", "LPAREN", "RPAREN", "DPOINT", "VTL_LCURLY", "VTL_RCURLY", 
		"COLON", "COMMA", "DQUOTE", "STRING", "IN", "LBRAK", "RBRAK", "PLUS", 
		"MINUS", "DIV", "MULT", "MODUL", "AND", "OR", "NOT", "LT", "GT", "LE", 
		"GE", "EQ", "NE", "ATTRIB", "Whitespace", "Newline", "VTL_Identifier", 
		"VTL_UNKNOWN2", "TEXT", "ESCAPETEXT", "STR_DQUOTE", "STR_Reference",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'#[['", "'#'", 
		"'$'", "']]#'", "'!'", undefined, undefined, undefined, undefined, "'.'", 
		undefined, undefined, "'|'", undefined, undefined, "'@'", undefined, "'break'", 
		"'set'", "'foreach'", "'if'", "'elseif'", "'else'", "'end'", "'stop'", 
		"'parse'", "'include'", "'evaluate'", "'define'", "'macro'", undefined, 
		undefined, undefined, undefined, "'('", "')'", "'..'", "':'", "','", undefined, 
		undefined, "'in'", "'['", "']'", "'+'", "'-'", "'/'", "'*'", "'%'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Code", "EscapeCode", "BlockComment", "LineComment", "UnparsedStart", 
		"Directive", "Reference", "UnparsedEnd", "BANG", "LCURLY", "EMPTY1", "Identifier", 
		"EMPTY2", "DOT", "EMPTY3", "RCURLY", "PIPE", "VTL_UNKNOWN0", "EMPTY4", 
		"AT", "EMPTYD3", "BREAK", "SET", "FOR", "IF", "ELSEIF", "ELSE", "END", 
		"STOP", "PARSE", "INCLUDE", "EVALUATE", "DEFINE", "MACRO", "DIR_WhiteSpace", 
		"VTL_UNKNOWN1", "NUMBER", "BOOL", "LPAREN", "RPAREN", "DPOINT", "COLON", 
		"COMMA", "DQUOTE", "STRING", "IN", "LBRAK", "RBRAK", "PLUS", "MINUS", 
		"DIV", "MULT", "MODUL", "AND", "OR", "NOT", "LT", "GT", "LE", "GE", "EQ", 
		"NE", "ATTRIB", "Whitespace", "Newline", "TEXT", "ESCAPETEXT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VelocityLexer._LITERAL_NAMES, VelocityLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VelocityLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(VelocityLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "VelocityLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return VelocityLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return VelocityLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return VelocityLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return VelocityLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02E\u02B6\b\x01" +
		"\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x03\x02\x03\x02\x03\x02\x07\x02\xC5\n\x02\f\x02\x0E" +
		"\x02\xC8\v\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x06\x05\xCF\n\x05" +
		"\r\x05\x0E\x05\xD0\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x07\x07\xDA\n\x07\f\x07\x0E\x07\xDD\v\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xE8\n\b\f\b\x0E\b\xEB\v" +
		"\b\x03\b\x03\b\x03\b\x03\b\x05\b\xF1\n\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x06\r\u010C\n\r\r\r" +
		"\x0E\r\u010D\x03\r\x03\r\x03\x0E\x06\x0E\u0113\n\x0E\r\x0E\x0E\x0E\u0114" +
		"\x03\x0E\x03\x0E\x03\x0F\x06\x0F\u011A\n\x0F\r\x0F\x0E\x0F\u011B\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x06\x1C\u0156\n\x1C\r\x1C\x0E\x1C\u0157\x03\x1C\x03\x1C\x06\x1C" +
		"\u015C\n\x1C\r\x1C\x0E\x1C\u015D\x05\x1C\u0160\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u016D\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E\u0173\n\x1E\f" +
		"\x1E\x0E\x1E\u0176\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03$" +
		"\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x03" +
		"1\x031\x031\x031\x032\x062\u01EE\n2\r2\x0E2\u01EF\x032\x032\x033\x033" +
		"\x033\x033\x033\x034\x034\x034\x034\x035\x065\u01FE\n5\r5\x0E5\u01FF\x03" +
		"5\x035\x065\u0204\n5\r5\x0E5\u0205\x055\u0208\n5\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x056\u0213\n6\x037\x037\x037\x037\x037\x038\x03" +
		"8\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03" +
		";\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03?\x03?\x03" +
		"@\x03@\x07@\u0239\n@\f@\x0E@\u023C\v@\x03@\x03@\x03A\x03A\x03A\x03B\x03" +
		"B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03" +
		"G\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I\u025A\nI\x03J\x03J\x03J\x03" +
		"J\x05J\u0260\nJ\x03K\x03K\x03K\x03K\x05K\u0266\nK\x03L\x03L\x03L\x05L" +
		"\u026B\nL\x03M\x03M\x03M\x05M\u0270\nM\x03N\x03N\x03N\x03N\x05N\u0276" +
		"\nN\x03O\x03O\x03O\x03O\x05O\u027C\nO\x03P\x03P\x03P\x03P\x05P\u0282\n" +
		"P\x03Q\x03Q\x03Q\x03Q\x05Q\u0288\nQ\x03R\x03R\x03S\x06S\u028D\nS\rS\x0E" +
		"S\u028E\x03S\x03S\x03T\x03T\x05T\u0295\nT\x03T\x05T\u0298\nT\x03T\x03" +
		"T\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03W\x06W\u02A6\nW\rW\x0E" +
		"W\u02A7\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03\xDB\x02\x02[\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x03\x17" +
		"\x02\x04\x19\x02\x05\x1B\x02\x06\x1D\x02\x07\x1F\x02\b!\x02\t#\x02\n%" +
		"\x02\x02\'\x02\x02)\x02\x02+\x02\v-\x02\f/\x02\r1\x02\x0E3\x02\x025\x02" +
		"\x0F7\x02\x109\x02\x02;\x02\x11=\x02\x12?\x02\x13A\x02\x14C\x02\x02E\x02" +
		"\x02G\x02\x02I\x02\x15K\x02\x02M\x02\x16O\x02\x17Q\x02\x18S\x02\x19U\x02" +
		"\x1AW\x02\x1BY\x02\x1C[\x02\x1D]\x02\x1E_\x02\x1Fa\x02 c\x02!e\x02\"g" +
		"\x02#i\x02$k\x02\x02m\x02\x02o\x02%q\x02\x02s\x02&u\x02\'w\x02(y\x02\x02" +
		"{\x02)}\x02*\x7F\x02+\x81\x02\x02\x83\x02\x02\x85\x02,\x87\x02-\x89\x02" +
		".\x8B\x02/\x8D\x020\x8F\x021\x91\x022\x93\x023\x95\x024\x97\x025\x99\x02" +
		"6\x9B\x027\x9D\x028\x9F\x029\xA1\x02:\xA3\x02;\xA5\x02<\xA7\x02=\xA9\x02" +
		">\xAB\x02?\xAD\x02@\xAF\x02A\xB1\x02B\xB3\x02C\xB5\x02\x02\xB7\x02\x02" +
		"\xB9\x02D\xBB\x02E\xBD\x02\x02\xBF\x02\x02\x0F\x02\x03\x04\x05\x06\x07" +
		"\b\t\n\v\f\r\x0E\v\x05\x02C\\aac|\x03\x022;\x04\x02%&^^\x04\x02\f\f\x0F" +
		"\x0F\x04\x02%%__\x03\x02))\x05\x02\v\f\x0F\x0F\"\"\x04\x02\v\v\"\"\x05" +
		"\x02$$&&^^\x02\u02C8\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x03%\x03" +
		"\x02\x02\x02\x03\'\x03\x02\x02\x02\x03)\x03\x02\x02\x02\x04+\x03\x02\x02" +
		"\x02\x04-\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x051\x03\x02\x02\x02\x06" +
		"3\x03\x02\x02\x02\x065\x03\x02\x02\x02\x077\x03\x02\x02\x02\x079\x03\x02" +
		"\x02\x02\x07;\x03\x02\x02\x02\b=\x03\x02\x02\x02\b?\x03\x02\x02\x02\b" +
		"A\x03\x02\x02\x02\tC\x03\x02\x02\x02\tE\x03\x02\x02\x02\tG\x03\x02\x02" +
		"\x02\tI\x03\x02\x02\x02\nK\x03\x02\x02\x02\nM\x03\x02\x02\x02\nO\x03\x02" +
		"\x02\x02\vQ\x03\x02\x02\x02\vS\x03\x02\x02\x02\vU\x03\x02\x02\x02\vW\x03" +
		"\x02\x02\x02\vY\x03\x02\x02\x02\v[\x03\x02\x02\x02\v]\x03\x02\x02\x02" +
		"\v_\x03\x02\x02\x02\va\x03\x02\x02\x02\vc\x03\x02\x02\x02\ve\x03\x02\x02" +
		"\x02\vg\x03\x02\x02\x02\vi\x03\x02\x02\x02\vk\x03\x02\x02\x02\vm\x03\x02" +
		"\x02\x02\vo\x03\x02\x02\x02\fq\x03\x02\x02\x02\fs\x03\x02\x02\x02\ru\x03" +
		"\x02\x02\x02\rw\x03\x02\x02\x02\ry\x03\x02\x02\x02\r{\x03\x02\x02\x02" +
		"\r}\x03\x02\x02\x02\r\x7F\x03\x02\x02\x02\r\x81\x03\x02\x02\x02\r\x83" +
		"\x03\x02\x02\x02\r\x85\x03\x02\x02\x02\r\x87\x03\x02\x02\x02\r\x89\x03" +
		"\x02\x02\x02\r\x8B\x03\x02\x02\x02\r\x8D\x03\x02\x02\x02\r\x8F\x03\x02" +
		"\x02\x02\r\x91\x03\x02\x02\x02\r\x93\x03\x02\x02\x02\r\x95\x03\x02\x02" +
		"\x02\r\x97\x03\x02\x02\x02\r\x99\x03\x02\x02\x02\r\x9B\x03\x02\x02\x02" +
		"\r\x9D\x03\x02\x02\x02\r\x9F\x03\x02\x02\x02\r\xA1\x03\x02\x02\x02\r\xA3" +
		"\x03\x02\x02\x02\r\xA5\x03\x02\x02\x02\r\xA7\x03\x02\x02\x02\r\xA9\x03" +
		"\x02\x02\x02\r\xAB\x03\x02\x02\x02\r\xAD\x03\x02\x02\x02\r\xAF\x03\x02" +
		"\x02\x02\r\xB1\x03\x02\x02\x02\r\xB3\x03\x02\x02\x02\r\xB5\x03\x02\x02" +
		"\x02\r\xB7\x03\x02\x02\x02\x0E\xB9\x03\x02\x02\x02\x0E\xBB\x03\x02\x02" +
		"\x02\x0E\xBD\x03\x02\x02\x02\x0E\xBF\x03\x02\x02\x02\x0F\xC1\x03\x02\x02" +
		"\x02\x11\xC9\x03\x02\x02\x02\x13\xCB\x03\x02\x02\x02\x15\xCE\x03\x02\x02" +
		"\x02\x17\xD2\x03\x02\x02\x02\x19\xD5\x03\x02\x02\x02\x1B\xE3\x03\x02\x02" +
		"\x02\x1D\xF4\x03\x02\x02\x02\x1F\xFB\x03\x02\x02\x02!\xFF\x03\x02\x02" +
		"\x02#\u0103\x03\x02\x02\x02%\u010B\x03\x02\x02\x02\'\u0112\x03\x02\x02" +
		"\x02)\u0119\x03\x02\x02\x02+\u011F\x03\x02\x02\x02-\u0121\x03\x02\x02" +
		"\x02/\u0126\x03\x02\x02\x021\u012B\x03\x02\x02\x023\u012F\x03\x02\x02" +
		"\x025\u0135\x03\x02\x02\x027\u013A\x03\x02\x02\x029\u013E\x03\x02\x02" +
		"\x02;\u0143\x03\x02\x02\x02=\u0148\x03\x02\x02\x02?\u014C\x03\x02\x02" +
		"\x02A\u0150\x03\x02\x02\x02C\u0155\x03\x02\x02\x02E\u016C\x03\x02\x02" +
		"\x02G\u0170\x03\x02\x02\x02I\u017B\x03\x02\x02\x02K\u0180\x03\x02\x02" +
		"\x02M\u0186\x03\x02\x02\x02O\u0188\x03\x02\x02\x02Q\u018D\x03\x02\x02" +
		"\x02S\u0195\x03\x02\x02\x02U\u0199\x03\x02\x02\x02W\u01A1\x03\x02\x02" +
		"\x02Y\u01A4\x03\x02\x02\x02[\u01AB\x03\x02\x02\x02]\u01B2\x03\x02\x02" +
		"\x02_\u01B8\x03\x02\x02\x02a\u01BF\x03\x02\x02\x02c\u01C5\x03\x02\x02" +
		"\x02e\u01CD\x03\x02\x02\x02g\u01D6\x03\x02\x02\x02i\u01DD\x03\x02\x02" +
		"\x02k\u01E3\x03\x02\x02\x02m\u01E8\x03\x02\x02\x02o\u01ED\x03\x02\x02" +
		"\x02q\u01F3\x03\x02\x02\x02s\u01F8\x03\x02\x02\x02u\u01FD\x03\x02\x02" +
		"\x02w\u0212\x03\x02\x02\x02y\u0214\x03\x02\x02\x02{\u0219\x03\x02\x02" +
		"\x02}\u021D\x03\x02\x02\x02\x7F\u0221\x03\x02\x02\x02\x81\u0224\x03\x02" +
		"\x02\x02\x83\u0229\x03\x02\x02\x02\x85\u022E\x03\x02\x02\x02\x87\u0230" +
		"\x03\x02\x02\x02\x89\u0232\x03\x02\x02\x02\x8B\u0236\x03\x02\x02\x02\x8D" +
		"\u023F\x03\x02\x02\x02\x8F\u0242\x03\x02\x02\x02\x91\u0246\x03\x02\x02" +
		"\x02\x93\u024A\x03\x02\x02\x02\x95\u024C\x03\x02\x02\x02\x97\u024E\x03" +
		"\x02\x02\x02\x99\u0250\x03\x02\x02\x02\x9B\u0252\x03\x02\x02\x02\x9D\u0259" +
		"\x03\x02\x02\x02\x9F\u025F\x03\x02\x02\x02\xA1\u0265\x03\x02\x02\x02\xA3" +
		"\u026A\x03\x02\x02\x02\xA5\u026F\x03\x02\x02\x02\xA7\u0275\x03\x02\x02" +
		"\x02\xA9\u027B\x03\x02\x02\x02\xAB\u0281\x03\x02\x02\x02\xAD\u0287\x03" +
		"\x02\x02\x02\xAF\u0289\x03\x02\x02\x02\xB1\u028C\x03\x02\x02\x02\xB3\u0297" +
		"\x03\x02\x02\x02\xB5\u029B\x03\x02\x02\x02\xB7\u029F\x03\x02\x02\x02\xB9" +
		"\u02A5\x03\x02\x02\x02\xBB\u02A9\x03\x02\x02\x02\xBD\u02AC\x03\x02\x02" +
		"\x02\xBF\u02B1\x03\x02\x02\x02\xC1\xC6\x05\x11\x03\x02\xC2\xC5\x05\x11" +
		"\x03\x02\xC3\xC5\x05\x13\x04\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC3\x03\x02" +
		"\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\x10\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\t\x02" +
		"\x02\x02\xCA\x12\x03\x02\x02\x02\xCB\xCC\t\x03\x02\x02\xCC\x14\x03\x02" +
		"\x02\x02\xCD\xCF\n\x04\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02" +
		"\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\x16\x03\x02" +
		"\x02\x02\xD2\xD3\x07^\x02\x02\xD3\xD4\v\x02\x02\x02\xD4\x18\x03\x02\x02" +
		"\x02\xD5\xD6\x07%\x02\x02\xD6\xD7\x07,\x02\x02\xD7\xDB\x03\x02\x02\x02" +
		"\xD8\xDA\v\x02\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02" +
		"\xDB\xDC\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02" +
		"\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x07,\x02\x02\xDF\xE0\x07%\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xE2\b\x07\x02\x02\xE2\x1A\x03\x02\x02\x02\xE3" +
		"\xE4\x07%\x02\x02\xE4\xE5\x07%\x02\x02\xE5\xE9\x03\x02\x02\x02\xE6\xE8" +
		"\n\x05\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7" +
		"\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xF0\x03\x02\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEC\xF1\x07\f\x02\x02\xED\xEE\x07\x0F\x02\x02\xEE\xF1" +
		"\x07\f\x02\x02\xEF\xF1\x07\x02\x02\x03\xF0\xEC\x03\x02\x02\x02\xF0\xED" +
		"\x03\x02\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3" +
		"\b\b\x02\x02\xF3\x1C\x03\x02\x02\x02\xF4\xF5\x07%\x02\x02\xF5\xF6\x07" +
		"]\x02\x02\xF6\xF7\x07]\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\b\t\x03" +
		"\x02\xF9\xFA\b\t\x04\x02\xFA\x1E\x03\x02\x02\x02\xFB\xFC\x07%\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\xFE\b\n\x05\x02\xFE \x03\x02\x02\x02\xFF" +
		"\u0100\x07&\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102\b\v\x06\x02" +
		"\u0102\"\x03\x02\x02\x02\u0103\u0104\x07_\x02\x02\u0104\u0105\x07_\x02" +
		"\x02\u0105\u0106\x07%\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108" +
		"\b\f\x03\x02\u0108\u0109\b\f\x07\x02\u0109$\x03\x02\x02\x02\u010A\u010C" +
		"\n\x06\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02" +
		"\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03" +
		"\x02\x02\x02\u010F\u0110\b\r\b\x02\u0110&\x03\x02\x02\x02\u0111\u0113" +
		"\x07_\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x03" +
		"\x02\x02\x02\u0116\u0117\b\x0E\b\x02\u0117(\x03\x02\x02\x02\u0118\u011A" +
		"\x07%\x02\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02" +
		"\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x03" +
		"\x02\x02\x02\u011D\u011E\b\x0F\b\x02\u011E*\x03\x02\x02\x02\u011F\u0120" +
		"\x07#\x02\x02\u0120,\x03\x02\x02\x02\u0121\u0122\x07}\x02\x02\u0122\u0123" +
		"\x03\x02\x02\x02\u0123\u0124\b\x11\t\x02\u0124\u0125\b\x11\n\x02\u0125" +
		".\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02" +
		"\x02\u0128\u0129\b\x12\x03\x02\u0129\u012A\b\x12\v\x02\u012A0\x03\x02" +
		"\x02\x02\u012B\u012C\x05\x0F\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D" +
		"\u012E\b\x13\f\x02\u012E2\x03\x02\x02\x02\u012F\u0130\x07*\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0132\b\x14\r\x02\u0132\u0133\b\x14\x0E\x02" +
		"\u0133\u0134\b\x14\x0F\x02\u01344\x03\x02\x02\x02\u0135\u0136\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\b\x15\x03\x02\u0138\u0139" +
		"\b\x15\x0E\x02\u01396\x03\x02\x02\x02\u013A\u013B\x070\x02\x02\u013B\u013C" +
		"\x03\x02\x02\x02\u013C\u013D\b\x16\v\x02\u013D8\x03\x02\x02\x02\u013E" +
		"\u013F\x07]\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\b\x17\x10" +
		"\x02\u0141\u0142\b\x17\x0F\x02\u0142:\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\b\x18\x03\x02\u0146" +
		"\u0147\b\x18\x07\x02\u0147<\x03\x02\x02\x02\u0148\u0149\x07\x7F\x02\x02" +
		"\u0149\u014A\x03\x02\x02\x02\u014A\u014B\b\x19\x07\x02\u014B>\x03\x02" +
		"\x02\x02\u014C\u014D\x07~\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u014F" +
		"\b\x1A\x11\x02\u014F@\x03\x02\x02\x02\u0150\u0151\v\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0153\b\x1B\x07\x02\u0153B\x03\x02\x02\x02" +
		"\u0154\u0156\x05\x13\x04\x02\u0155\u0154\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
		"\u015F\x03\x02\x02\x02\u0159\u015B\x070\x02\x02\u015A\u015C\x05\x13\x04" +
		"\x02\u015B\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015B" +
		"\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02" +
		"\u015F\u0159\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03" +
		"\x02\x02\x02\u0161\u0162\b\x1C\x12\x02\u0162D\x03\x02\x02\x02\u0163\u0164" +
		"\x07v\x02\x02\u0164\u0165\x07t\x02\x02\u0165\u0166\x07w\x02\x02\u0166" +
		"\u016D\x07g\x02\x02\u0167\u0168\x07h\x02\x02\u0168\u0169\x07c\x02\x02" +
		"\u0169\u016A\x07n\x02\x02\u016A\u016B\x07u\x02\x02\u016B\u016D\x07g\x02" +
		"\x02\u016C\u0163\x03\x02\x02\x02\u016C\u0167\x03\x02\x02\x02\u016D\u016E" +
		"\x03\x02\x02\x02\u016E\u016F\b\x1D\x13\x02\u016FF\x03\x02\x02\x02\u0170" +
		"\u0174\x07)\x02\x02\u0171\u0173\n\x07\x02\x02\u0172\u0171\x03\x02\x02" +
		"\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02" +
		"\u0177\u0178\x07)\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\b\x1E" +
		"\x14\x02\u017AH\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D" +
		"\x03\x02\x02\x02\u017D\u017E\b\x1F\x03\x02\u017E\u017F\b\x1F\x07\x02\u017F" +
		"J\x03\x02\x02\x02\u0180\u0181\x07}\x02\x02\u0181\u0182\x03\x02\x02\x02" +
		"\u0182\u0183\b \x15\x02\u0183\u0184\b \x16\x02\u0184\u0185\b \x17\x02" +
		"\u0185L\x03\x02\x02\x02\u0186\u0187\x07B\x02\x02\u0187N\x03\x02\x02\x02" +
		"\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\b" +
		"\"\x03\x02\u018B\u018C\b\"\x18\x02\u018CP\x03\x02\x02\x02\u018D\u018E" +
		"\x07d\x02\x02\u018E\u018F\x07t\x02\x02\u018F\u0190\x07g\x02\x02\u0190" +
		"\u0191\x07c\x02\x02\u0191\u0192\x07m\x02\x02\u0192\u0193\x03\x02\x02\x02" +
		"\u0193\u0194\b#\x07\x02\u0194R\x03\x02\x02\x02\u0195\u0196\x07u\x02\x02" +
		"\u0196\u0197\x07g\x02\x02\u0197\u0198\x07v\x02\x02\u0198T\x03\x02\x02" +
		"\x02\u0199\u019A\x07h\x02\x02\u019A\u019B\x07q\x02\x02\u019B\u019C\x07" +
		"t\x02\x02\u019C\u019D\x07g\x02\x02\u019D\u019E\x07c\x02\x02\u019E\u019F" +
		"\x07e\x02\x02\u019F\u01A0\x07j\x02\x02\u01A0V\x03\x02\x02\x02\u01A1\u01A2" +
		"\x07k\x02\x02\u01A2\u01A3\x07h\x02\x02\u01A3X\x03\x02\x02\x02\u01A4\u01A5" +
		"\x07g\x02\x02\u01A5\u01A6\x07n\x02\x02\u01A6\u01A7\x07u\x02\x02\u01A7" +
		"\u01A8\x07g\x02\x02\u01A8\u01A9\x07k\x02\x02\u01A9\u01AA\x07h\x02\x02" +
		"\u01AAZ\x03\x02\x02\x02\u01AB\u01AC\x07g\x02\x02\u01AC\u01AD\x07n\x02" +
		"\x02\u01AD\u01AE\x07u\x02\x02\u01AE\u01AF\x07g\x02\x02\u01AF\u01B0\x03" +
		"\x02\x02\x02\u01B0\u01B1\b(\x07\x02\u01B1\\\x03\x02\x02\x02\u01B2\u01B3" +
		"\x07g\x02\x02\u01B3\u01B4\x07p\x02\x02\u01B4\u01B5\x07f\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01B7\b)\x07\x02\u01B7^\x03\x02\x02\x02\u01B8" +
		"\u01B9\x07u\x02\x02\u01B9\u01BA\x07v\x02\x02\u01BA\u01BB\x07q\x02\x02" +
		"\u01BB\u01BC\x07r\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\b*\x07" +
		"\x02\u01BE`\x03\x02\x02\x02\u01BF\u01C0\x07r\x02\x02\u01C0\u01C1\x07c" +
		"\x02\x02\u01C1\u01C2\x07t\x02\x02\u01C2\u01C3\x07u\x02\x02\u01C3\u01C4" +
		"\x07g\x02\x02\u01C4b\x03\x02\x02\x02\u01C5\u01C6\x07k\x02\x02\u01C6\u01C7" +
		"\x07p\x02\x02\u01C7\u01C8\x07e\x02\x02\u01C8\u01C9\x07n\x02\x02\u01C9" +
		"\u01CA\x07w\x02\x02\u01CA\u01CB\x07f\x02\x02\u01CB\u01CC\x07g\x02\x02" +
		"\u01CCd\x03\x02\x02\x02\u01CD\u01CE\x07g\x02\x02\u01CE\u01CF\x07x\x02" +
		"\x02\u01CF\u01D0\x07c\x02\x02\u01D0\u01D1\x07n\x02\x02\u01D1\u01D2\x07" +
		"w\x02\x02\u01D2\u01D3\x07c\x02\x02\u01D3\u01D4\x07v\x02\x02\u01D4\u01D5" +
		"\x07g\x02\x02\u01D5f\x03\x02\x02\x02\u01D6\u01D7\x07f\x02\x02\u01D7\u01D8" +
		"\x07g\x02\x02\u01D8\u01D9\x07h\x02\x02\u01D9\u01DA\x07k\x02\x02\u01DA" +
		"\u01DB\x07p\x02\x02\u01DB\u01DC\x07g\x02\x02\u01DCh\x03\x02\x02\x02\u01DD" +
		"\u01DE\x07o\x02\x02\u01DE\u01DF\x07c\x02\x02\u01DF\u01E0\x07e\x02\x02" +
		"\u01E0\u01E1\x07t\x02\x02\u01E1\u01E2\x07q\x02\x02\u01E2j\x03\x02\x02" +
		"\x02\u01E3\u01E4\x07*\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6" +
		"\b0\r\x02\u01E6\u01E7\b0\x19\x02\u01E7l\x03\x02\x02\x02\u01E8\u01E9\x05" +
		"\x0F\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\b1\x1A\x02\u01EB" +
		"n\x03\x02\x02\x02\u01EC\u01EE\t\b\x02\x02\u01ED\u01EC\x03\x02\x02\x02" +
		"\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\b2\x03\x02\u01F2" +
		"p\x03\x02\x02\x02\u01F3\u01F4\x07\x7F\x02\x02\u01F4\u01F5\x03\x02\x02" +
		"\x02\u01F5\u01F6\b3\x1B\x02\u01F6\u01F7\b3\x07\x02\u01F7r\x03\x02\x02" +
		"\x02\u01F8\u01F9\v\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB" +
		"\b4\x07\x02\u01FBt\x03\x02\x02\x02\u01FC\u01FE\x05\x13\x04\x02\u01FD\u01FC" +
		"\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0207\x03\x02\x02\x02\u0201\u0203\x07" +
		"0\x02\x02\u0202\u0204\x05\x13\x04\x02\u0203\u0202\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02" +
		"\x02\x02\u0206\u0208\x03\x02\x02\x02\u0207\u0201\x03\x02\x02\x02\u0207" +
		"\u0208\x03\x02\x02\x02\u0208v\x03\x02\x02\x02\u0209\u020A\x07v\x02\x02" +
		"\u020A\u020B\x07t\x02\x02\u020B\u020C\x07w\x02\x02\u020C\u0213\x07g\x02" +
		"\x02\u020D\u020E\x07h\x02\x02\u020E\u020F\x07c\x02\x02\u020F\u0210\x07" +
		"n\x02\x02\u0210\u0211\x07u\x02\x02\u0211\u0213\x07g\x02\x02\u0212\u0209" +
		"\x03\x02\x02\x02\u0212\u020D\x03\x02\x02\x02\u0213x\x03\x02\x02\x02\u0214" +
		"\u0215\x07&\x02\x02\u0215";
	private static readonly _serializedATNSegment1: string =
		"\u0216\x03\x02\x02\x02\u0216\u0217\b7\x1C\x02\u0217\u0218\b7\x06\x02\u0218" +
		"z\x03\x02\x02\x02\u0219\u021A\x07*\x02\x02\u021A\u021B\x03\x02\x02\x02" +
		"\u021B\u021C\b8\x0F\x02\u021C|\x03\x02\x02\x02\u021D\u021E\x07+\x02\x02" +
		"\u021E\u021F\x03\x02\x02\x02\u021F\u0220\b9\x07\x02\u0220~\x03\x02\x02" +
		"\x02\u0221\u0222\x070\x02\x02\u0222\u0223\x070\x02\x02\u0223\x80\x03\x02" +
		"\x02\x02\u0224\u0225\x07}\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227" +
		"\b;\x15\x02\u0227\u0228\b;\x0F\x02\u0228\x82\x03\x02\x02\x02\u0229\u022A" +
		"\x07\x7F\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\b<\x1B\x02\u022C" +
		"\u022D\b<\x07\x02\u022D\x84\x03\x02\x02\x02\u022E\u022F\x07<\x02\x02\u022F" +
		"\x86\x03\x02\x02\x02\u0230\u0231\x07.\x02\x02\u0231\x88\x03\x02\x02\x02" +
		"\u0232\u0233\x07$\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\b?\x1D" +
		"\x02\u0235\x8A\x03\x02\x02\x02\u0236\u023A\x07)\x02\x02\u0237\u0239\n" +
		"\x07\x02\x02\u0238\u0237\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A" +
		"\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02" +
		"\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023E\x07)\x02\x02\u023E\x8C" +
		"\x03\x02\x02\x02\u023F\u0240\x07k\x02\x02\u0240\u0241\x07p\x02\x02\u0241" +
		"\x8E\x03\x02\x02\x02\u0242\u0243\x07]\x02\x02\u0243\u0244\x03\x02\x02" +
		"\x02\u0244\u0245\bB\x0F\x02\u0245\x90\x03\x02\x02\x02\u0246\u0247\x07" +
		"_\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u0249\bC\x07\x02\u0249\x92" +
		"\x03\x02\x02\x02\u024A\u024B\x07-\x02\x02\u024B\x94\x03\x02\x02\x02\u024C" +
		"\u024D\x07/\x02\x02\u024D\x96\x03\x02\x02\x02\u024E\u024F\x071\x02\x02" +
		"\u024F\x98\x03\x02\x02\x02\u0250\u0251\x07,\x02\x02\u0251\x9A\x03\x02" +
		"\x02\x02\u0252\u0253\x07\'\x02\x02\u0253\x9C\x03\x02\x02\x02\u0254\u0255" +
		"\x07(\x02\x02\u0255\u025A\x07(\x02\x02\u0256\u0257\x07c\x02\x02\u0257" +
		"\u0258\x07p\x02\x02\u0258\u025A\x07f\x02\x02\u0259\u0254\x03\x02\x02\x02" +
		"\u0259\u0256\x03\x02\x02\x02\u025A\x9E\x03\x02\x02\x02\u025B\u025C\x07" +
		"~\x02\x02\u025C\u0260\x07~\x02\x02\u025D\u025E\x07q\x02\x02\u025E\u0260" +
		"\x07t\x02\x02\u025F\u025B\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02" +
		"\u0260\xA0\x03\x02\x02\x02\u0261\u0266\x07#\x02\x02\u0262\u0263\x07p\x02" +
		"\x02\u0263\u0264\x07q\x02\x02\u0264\u0266\x07v\x02\x02\u0265\u0261\x03" +
		"\x02\x02\x02\u0265\u0262\x03\x02\x02\x02\u0266\xA2\x03\x02\x02\x02\u0267" +
		"\u026B\x07>\x02\x02\u0268\u0269\x07n\x02\x02\u0269\u026B\x07v\x02\x02" +
		"\u026A\u0267\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B\xA4\x03" +
		"\x02\x02\x02\u026C\u0270\x07@\x02\x02\u026D\u026E\x07i\x02\x02\u026E\u0270" +
		"\x07v\x02\x02\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02" +
		"\u0270\xA6\x03\x02\x02\x02\u0271\u0272\x07>\x02\x02\u0272\u0276\x07?\x02" +
		"\x02\u0273\u0274\x07n\x02\x02\u0274\u0276\x07g\x02\x02\u0275\u0271\x03" +
		"\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0276\xA8\x03\x02\x02\x02\u0277" +
		"\u0278\x07@\x02\x02\u0278\u027C\x07?\x02\x02\u0279\u027A\x07i\x02\x02" +
		"\u027A\u027C\x07g\x02\x02\u027B\u0277\x03\x02\x02\x02\u027B\u0279\x03" +
		"\x02\x02\x02\u027C\xAA\x03\x02\x02\x02\u027D\u027E\x07?\x02\x02\u027E" +
		"\u0282\x07?\x02\x02\u027F\u0280\x07g\x02\x02\u0280\u0282\x07s\x02\x02" +
		"\u0281\u027D\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\xAC\x03" +
		"\x02\x02\x02\u0283\u0284\x07#\x02\x02\u0284\u0288\x07?\x02\x02\u0285\u0286" +
		"\x07p\x02\x02\u0286\u0288\x07g\x02\x02\u0287\u0283\x03\x02\x02\x02\u0287" +
		"\u0285\x03\x02\x02\x02\u0288\xAE\x03\x02\x02\x02\u0289\u028A\x07?\x02" +
		"\x02\u028A\xB0\x03\x02\x02\x02\u028B\u028D\t\t\x02\x02\u028C\u028B\x03" +
		"\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E" +
		"\u028F\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0291\bS\x03" +
		"\x02\u0291\xB2\x03\x02\x02\x02\u0292\u0294\x07\x0F\x02\x02\u0293\u0295" +
		"\x07\f\x02\x02\u0294\u0293\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02" +
		"\u0295\u0298\x03\x02\x02\x02\u0296\u0298\x07\f\x02\x02\u0297\u0292\x03" +
		"\x02\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299" +
		"\u029A\bT\x03\x02\u029A\xB4\x03\x02\x02\x02\u029B\u029C\x05\x0F\x02\x02" +
		"\u029C\u029D\x03\x02\x02\x02\u029D\u029E\bU\x1A\x02\u029E\xB6\x03\x02" +
		"\x02\x02\u029F\u02A0\x07%\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2" +
		"\bV\x1E\x02\u02A2\u02A3\bV\x18\x02\u02A3\xB8\x03\x02\x02\x02\u02A4\u02A6" +
		"\n\n\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7" +
		"\u02A5\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\xBA\x03\x02\x02" +
		"\x02\u02A9\u02AA\x07^\x02\x02\u02AA\u02AB\v\x02\x02\x02\u02AB\xBC\x03" +
		"\x02\x02\x02\u02AC\u02AD\x07$\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE" +
		"\u02AF\bY\x1F\x02\u02AF\u02B0\bY\x07\x02\u02B0\xBE\x03\x02\x02\x02\u02B1" +
		"\u02B2\x07&\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\bZ\x1C\x02" +
		"\u02B4\u02B5\bZ\x06\x02\u02B5\xC0\x03\x02\x02\x020\x02\x03\x04\x05\x06" +
		"\x07\b\t\n\v\f\r\x0E\xC4\xC6\xD0\xDB\xE9\xF0\u010D\u0114\u011B\u0157\u015D" +
		"\u015F\u016C\u0174\u01EF\u01FF\u0205\u0207\u0212\u023A\u0259\u025F\u0265" +
		"\u026A\u026F\u0275\u027B\u0281\u0287\u028E\u0294\u0297\u02A7 \x02\x04" +
		"\x02\b\x02\x02\x07\x03\x02\x07\n\x02\x07\x04\x02\x06\x02\x02\t\x03\x02" +
		"\x04\b\x02\x07\x05\x02\x04\x05\x02\x04\x06\x02\t)\x02\x04\x07\x02\x07" +
		"\r\x02\t1\x02\x07\t\x02\t\'\x02\t(\x02\t/\x02\t\f\x02\x04\f\x02\x07\v" +
		"\x02\x04\v\x02\x04\r\x02\t\x0E\x02\t\x12\x02\t\t\x02\x07\x0E\x02\t\b\x02" +
		"\t.\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			VelocityLexer._serializedATNSegment0,
			VelocityLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VelocityLexer.__ATN) {
			VelocityLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VelocityLexer._serializedATN));
		}

		return VelocityLexer.__ATN;
	}

}

