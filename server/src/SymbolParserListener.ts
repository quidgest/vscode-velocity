/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import { VelocityParserListener } from './VelocityParserListener';
import { TemplateContext
, ReferenceContext 
, CallContext 
, MethodcallContext 
, FunctioncallContext 
, ArglistContext 
, ExprContext 
, LiteralContext 
, StringTemplateContext 
, DirectiveContext 
, DirSetContext 
, DirForContext 
, DirIfContext 
, DirElseifContext 
, DirElseContext 
, DirParseContext
, DirMacrocallContext } from "./VelocityParser";
import { CallSymbol, CallType } from './CallSymbol';

export class SymbolParserListener implements VelocityParserListener
{
	symbols = new Set<string>();
	calls = new Map<string, CallSymbol>();

	constructor() {		
	}

	enterReference(ctx: ReferenceContext) {
		//console.log('reference: ' + ctx.Identifier().text);
		this.symbols.add(ctx.Identifier().text);
	}

	enterDirSet(ctx: DirSetContext) {
		//console.log('set: ' + ctx.Identifier().text);
		this.symbols.add(ctx.Identifier().text);
	}

	enterDirFor(ctx: DirForContext) {
		//console.log('for: ' + ctx.Identifier().text);
		this.symbols.add(ctx.Identifier().text);
	}
	enterMethodcall(ctx: MethodcallContext) {
		let name = ctx.Identifier().text;
		this.calls.set(name, {
			name: name,
			type: CallType.Property,
			argList: []
		})
	}
	enterFunctioncall(ctx: FunctioncallContext) {
		let name = ctx.Identifier().text;
		this.calls.set(name, {
			name: name,
			type: CallType.Method,
			argList: []
		})
	}
}