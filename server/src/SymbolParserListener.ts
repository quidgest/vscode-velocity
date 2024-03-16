/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import { VelocityParserListener } from './VelocityParserListener';
import { 
	TemplateContext
	, ReferenceContext 
	, MethodcallContext 
	, FunctioncallContext 
	, DirSetContext 
	, DirForContext 
	, DirDefineContext 
	, DirMacroDefContext
	, DirIfContext
} from "./VelocityParser";
import { 
	CallSymbol
	, CallType 
	, SymbolInstance,
	SymbolModifier
} from './CallSymbol';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { FoldingRange, FoldingRangeKind, uinteger } from 'vscode-languageserver';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

export class SymbolParserListener implements VelocityParserListener
{
	variables = new Map<string, CallSymbol>();
	calls = new Map<string, CallSymbol>();
	macros = new Map<string, CallSymbol>();

	allTokens = new Array<SymbolInstance>();

	foldings = new Array<FoldingRange>();

	constructor() {
	}

	private addSymbolInstance(map: Map<string, CallSymbol>, node: TerminalNode, type: CallType, modifiers: SymbolModifier)
	{
		let name = node.text;
		let symbol = map.get(name);
		let range = {
			start: { line: node.symbol.line-1, character: node.symbol.charPositionInLine },
			end: { line: node.symbol.line-1, character: (node.symbol.charPositionInLine + (node.text?.length ?? 0)) }
		};
		if(symbol)
		{
			symbol.instances.push(range);
		}
		else
		{
			symbol = {
				name: name,
				type: type,
				modifiers: modifiers,
				argList: [],
				instances: [range]
			};
			map.set(name, symbol);
		}

		this.allTokens.push({ range, symbol });
	}

	getLineIndex() : Array<number>
	{
		const len = this.allTokens.length;
		if (len === 0)
			return [];
		const maxline = this.allTokens[len-1].range.end.line;
		const res = new Array<number>(maxline);
		let lastline = 0;
		for (let index = 0; index < len; index++) {
			const newline = this.allTokens[index].range.start.line;
			for (; lastline <= newline; lastline++) {
				res[lastline] = index;
			}
		}
		return res;
	}

	getSemanticTokens() : uinteger[] {
		const len = this.allTokens.length;
		const res = new Array<uinteger>(len * 5);

		let lastLine = 0;
		let lastChar = 0;
		let semindex = 0;
		for (let index = 0; index < len; index++) {
			const instance = this.allTokens[index];
			const newline = instance.range.start.line;
			res[semindex++] = newline-lastLine;
			const newchar = instance.range.start.character;
			if(newline != lastLine)
				res[semindex++] = newchar;
			else
				res[semindex++] = newchar - lastChar;
			res[semindex++] = instance.range.end.character - newchar;
			res[semindex++] = instance.symbol.type;
			res[semindex++] = instance.symbol.modifiers;
			lastLine = newline;
			lastChar = newchar;
		}
		
		return res;
	}

	enterReference(ctx: ReferenceContext) {
		if(ctx.exception)
			return;
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable, SymbolModifier.Readonly);
	}

	enterDirSet(ctx: DirSetContext) {
		if(ctx.exception)
			return;
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable, SymbolModifier.Declaration);
	}

	enterDirFor(ctx: DirForContext) {
		if(ctx.exception)
			return;

		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable, SymbolModifier.Declaration);

		var end = ctx.dirEnd();
		var fr : FoldingRange = {
			kind: FoldingRangeKind.Region,
			startLine: ctx.start.line -1,
			startCharacter: ctx.start.charPositionInLine,
			endLine: (end.stop?.line ?? end.start.line)-1,
			endCharacter: end.stop?.charPositionInLine
		};
		//console.log("folding", fr);
		this.foldings.push(fr);
	}

	enterDirIf(ctx: DirIfContext) {
		if(ctx.exception)
			return;

		var end = ctx.dirEnd();
		var fr : FoldingRange = {
			kind: FoldingRangeKind.Region,
			startLine: ctx.start.line -1,
			startCharacter: ctx.start.charPositionInLine,
			endLine: (end.stop?.line ?? end.start.line)-1,
			endCharacter: end.stop?.charPositionInLine
		};
		//console.log("folding", fr);
		this.foldings.push(fr);
	}

	enterMethodcall(ctx: MethodcallContext) {
		if(ctx.exception)
			return;

		this.addSymbolInstance(this.calls, ctx.Identifier(), CallType.Property, SymbolModifier.None);
	}

	enterFunctioncall(ctx: FunctioncallContext) {
		if(ctx.exception)
			return;

		this.addSymbolInstance(this.calls, ctx.Identifier(), CallType.Method, SymbolModifier.None);
	}

	enterDirDefine(ctx: DirDefineContext) {
		if(ctx.exception)
			return;

		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable, SymbolModifier.Declaration);
	}

	enterDirMacroDef(ctx: DirMacroDefContext) {
		if(ctx.exception)
			return;

		const parameters = ctx.Identifier();

		this.addSymbolInstance(this.macros, parameters[0], CallType.Macro, SymbolModifier.Declaration);

		for (let i = 1; i < parameters.length; i++) {
			this.addSymbolInstance(this.variables, parameters[i], CallType.Variable, SymbolModifier.Declaration);
		}

		var end = ctx.dirEnd();
		var fr : FoldingRange = {
			kind: FoldingRangeKind.Region,
			startLine: ctx.start.line -1,
			startCharacter: ctx.start.charPositionInLine,
			endLine: (end.stop?.line ?? end.start.line)-1,
			endCharacter: end.stop?.charPositionInLine
		};
		//console.log("folding", fr);
		this.foldings.push(fr);
	}

	// visitErrorNode(node: ErrorNode) {
	// 	console.log("tree error")
	// }

}