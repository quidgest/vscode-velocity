/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import { VelocityParserListener } from './VelocityParserListener';
import { TemplateContext
, ReferenceContext 
, MethodcallContext 
, FunctioncallContext 
, DirSetContext 
, DirForContext 
, DirDefineContext 
, DirMacroDefContext,
DirIfContext
} from "./VelocityParser";
import { CallSymbol
	, CallType 
	, SymbolInstance
} from './CallSymbol';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { FoldingRange, FoldingRangeKind } from 'vscode-languageserver';

export class SymbolParserListener implements VelocityParserListener
{
	variables = new Map<string, CallSymbol>();
	calls = new Map<string, CallSymbol>();
	macros = new Map<string, CallSymbol>();

	//tokenInstances = new Array<SymbolInstance>();
	tokenInstances = new Map<number, Array<SymbolInstance>>();

	foldings = new Array<FoldingRange>();

	constructor() {
	}

	private addSymbolInstance(map: Map<string, CallSymbol>, node: TerminalNode, type: CallType)
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
				argList: [],
				instances: [range]
			};
			map.set(name, symbol);
		}

		let line = this.tokenInstances.get(range.start.line);
		if(line)
		{
			line.push({range, symbol});
		}
		else
		{
			line = [{range, symbol}];
			this.tokenInstances.set(range.start.line, line);
		}

		// this.tokenInstances.push({
		// 	range,
		// 	symbol
		// });
	}

	enterReference(ctx: ReferenceContext) {		
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable);
	}

	enterDirSet(ctx: DirSetContext) {
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable);
	}

	enterDirFor(ctx: DirForContext) {
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable);

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
		this.addSymbolInstance(this.calls, ctx.Identifier(), CallType.Property);
	}

	enterFunctioncall(ctx: FunctioncallContext) {
		this.addSymbolInstance(this.calls, ctx.Identifier(), CallType.Method);
	}

	enterDirDefine(ctx: DirDefineContext) {
		this.addSymbolInstance(this.variables, ctx.Identifier(), CallType.Variable);
	}

	enterDirMacroDef(ctx: DirMacroDefContext) {
		this.addSymbolInstance(this.macros, ctx.Identifier()[0], CallType.Macro);

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

}