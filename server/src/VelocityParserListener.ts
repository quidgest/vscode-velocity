// Generated from ../syntaxes/VelocityParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TemplateFileContext } from "./VelocityParser";
import { TemplateContext } from "./VelocityParser";
import { ReferenceContext } from "./VelocityParser";
import { CallContext } from "./VelocityParser";
import { IndexcallContext } from "./VelocityParser";
import { MethodcallContext } from "./VelocityParser";
import { FunctioncallContext } from "./VelocityParser";
import { ArglistContext } from "./VelocityParser";
import { ExprContext } from "./VelocityParser";
import { LiteralContext } from "./VelocityParser";
import { StringTemplateContext } from "./VelocityParser";
import { CollectionContext } from "./VelocityParser";
import { RangeContext } from "./VelocityParser";
import { DirectiveContext } from "./VelocityParser";
import { DirSetContext } from "./VelocityParser";
import { DirParseContext } from "./VelocityParser";
import { DirIncludeContext } from "./VelocityParser";
import { DirEvaluateContext } from "./VelocityParser";
import { DirStopContext } from "./VelocityParser";
import { DirBreakContext } from "./VelocityParser";
import { DirMacrocallContext } from "./VelocityParser";
import { DirDefineContext } from "./VelocityParser";
import { DirForContext } from "./VelocityParser";
import { DirIfContext } from "./VelocityParser";
import { DirElseifContext } from "./VelocityParser";
import { DirElseContext } from "./VelocityParser";
import { DirEndContext } from "./VelocityParser";
import { DirMacroDefContext } from "./VelocityParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VelocityParser`.
 */
export interface VelocityParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VelocityParser.templateFile`.
	 * @param ctx the parse tree
	 */
	enterTemplateFile?: (ctx: TemplateFileContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.templateFile`.
	 * @param ctx the parse tree
	 */
	exitTemplateFile?: (ctx: TemplateFileContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.indexcall`.
	 * @param ctx the parse tree
	 */
	enterIndexcall?: (ctx: IndexcallContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.indexcall`.
	 * @param ctx the parse tree
	 */
	exitIndexcall?: (ctx: IndexcallContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.methodcall`.
	 * @param ctx the parse tree
	 */
	enterMethodcall?: (ctx: MethodcallContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.methodcall`.
	 * @param ctx the parse tree
	 */
	exitMethodcall?: (ctx: MethodcallContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.stringTemplate`.
	 * @param ctx the parse tree
	 */
	enterStringTemplate?: (ctx: StringTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.stringTemplate`.
	 * @param ctx the parse tree
	 */
	exitStringTemplate?: (ctx: StringTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.collection`.
	 * @param ctx the parse tree
	 */
	enterCollection?: (ctx: CollectionContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.collection`.
	 * @param ctx the parse tree
	 */
	exitCollection?: (ctx: CollectionContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirSet`.
	 * @param ctx the parse tree
	 */
	enterDirSet?: (ctx: DirSetContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirSet`.
	 * @param ctx the parse tree
	 */
	exitDirSet?: (ctx: DirSetContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirParse`.
	 * @param ctx the parse tree
	 */
	enterDirParse?: (ctx: DirParseContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirParse`.
	 * @param ctx the parse tree
	 */
	exitDirParse?: (ctx: DirParseContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirInclude`.
	 * @param ctx the parse tree
	 */
	enterDirInclude?: (ctx: DirIncludeContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirInclude`.
	 * @param ctx the parse tree
	 */
	exitDirInclude?: (ctx: DirIncludeContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirEvaluate`.
	 * @param ctx the parse tree
	 */
	enterDirEvaluate?: (ctx: DirEvaluateContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirEvaluate`.
	 * @param ctx the parse tree
	 */
	exitDirEvaluate?: (ctx: DirEvaluateContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirStop`.
	 * @param ctx the parse tree
	 */
	enterDirStop?: (ctx: DirStopContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirStop`.
	 * @param ctx the parse tree
	 */
	exitDirStop?: (ctx: DirStopContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirBreak`.
	 * @param ctx the parse tree
	 */
	enterDirBreak?: (ctx: DirBreakContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirBreak`.
	 * @param ctx the parse tree
	 */
	exitDirBreak?: (ctx: DirBreakContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirMacrocall`.
	 * @param ctx the parse tree
	 */
	enterDirMacrocall?: (ctx: DirMacrocallContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirMacrocall`.
	 * @param ctx the parse tree
	 */
	exitDirMacrocall?: (ctx: DirMacrocallContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirDefine`.
	 * @param ctx the parse tree
	 */
	enterDirDefine?: (ctx: DirDefineContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirDefine`.
	 * @param ctx the parse tree
	 */
	exitDirDefine?: (ctx: DirDefineContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirFor`.
	 * @param ctx the parse tree
	 */
	enterDirFor?: (ctx: DirForContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirFor`.
	 * @param ctx the parse tree
	 */
	exitDirFor?: (ctx: DirForContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirIf`.
	 * @param ctx the parse tree
	 */
	enterDirIf?: (ctx: DirIfContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirIf`.
	 * @param ctx the parse tree
	 */
	exitDirIf?: (ctx: DirIfContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirElseif`.
	 * @param ctx the parse tree
	 */
	enterDirElseif?: (ctx: DirElseifContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirElseif`.
	 * @param ctx the parse tree
	 */
	exitDirElseif?: (ctx: DirElseifContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirElse`.
	 * @param ctx the parse tree
	 */
	enterDirElse?: (ctx: DirElseContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirElse`.
	 * @param ctx the parse tree
	 */
	exitDirElse?: (ctx: DirElseContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirEnd`.
	 * @param ctx the parse tree
	 */
	enterDirEnd?: (ctx: DirEndContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirEnd`.
	 * @param ctx the parse tree
	 */
	exitDirEnd?: (ctx: DirEndContext) => void;

	/**
	 * Enter a parse tree produced by `VelocityParser.dirMacroDef`.
	 * @param ctx the parse tree
	 */
	enterDirMacroDef?: (ctx: DirMacroDefContext) => void;
	/**
	 * Exit a parse tree produced by `VelocityParser.dirMacroDef`.
	 * @param ctx the parse tree
	 */
	exitDirMacroDef?: (ctx: DirMacroDefContext) => void;
}

