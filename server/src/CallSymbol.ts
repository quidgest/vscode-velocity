/*!
 * Copyright 2020 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
import {
	Range
} from 'vscode-languageserver';

export interface CallSymbol {
	name: string,
	type: CallType,
	modifiers: SymbolModifier,
	argList: string[],
	instances: Range[]	
}

export enum CallType {
	Variable,
	Property,
	Method,
	Macro
}

export enum SymbolModifier {
	None = 0,
	Declaration = 1 << 0,
	Readonly = 1 << 1
}

export var SemanticLegend = {
	tokenTypes: ["variable", "property", "method", "macro"],
	tokenModifiers: ["declaration", "readonly"]
}

export interface SymbolInstance {
	range: Range,
	symbol: CallSymbol
}

//C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.X
//https://jasonsteinshouer.com/javascript/2016/07/05/xml-to-csv-using-node-streams.html