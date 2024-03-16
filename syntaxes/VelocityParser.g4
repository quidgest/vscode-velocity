/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
parser grammar VelocityParser;
//https://velocity.apache.org/engine/1.7/user-guide.html
//https://github.com/antlr/antlr4/blob/master/doc/parser-rules.md

options { tokenVocab=VelocityLexer; }

templateFile: template EOF;

template : (Code | EscapeCode | directive | reference)*;

reference : Reference BANG? Identifier call*
	      | Reference BANG? LCURLY Identifier call* (PIPE literal)? RCURLY
		  ;

call : indexcall | methodcall | functioncall;

indexcall: LBRAK expr RBRAK;

methodcall: DOT Identifier;

functioncall: DOT Identifier LPAREN arglist? RPAREN;

arglist: expr (COMMA expr)*;

expr: LPAREN expr RPAREN
	| expr OR expr
	| expr AND expr
	| expr LE expr
	| expr LT expr
	| expr GE expr
	| expr GT expr
	| expr EQ expr
	| expr NE expr
	| NOT expr
	| expr PLUS expr
	| expr MINUS expr
	| expr MULT expr
	| expr DIV expr
	| expr MODUL expr
	| reference
	| literal
	| stringTemplate
	| collection
	| range
	| dictionary
	;

literal: STRING
	| NUMBER
	| BOOL
	;

stringTemplate: DQUOTE ( TEXT | ESCAPETEXT | reference )* DQUOTE;

collection: LBRAK expr (COMMA expr)* RBRAK;

dictionary: LCURLY expr COLON expr (COMMA expr COLON expr)* RCURLY;

range: LBRAK NUMBER DPOINT NUMBER RBRAK;

directive: Directive 
	( dirSet
	| LCURLY dirSet RCURLY
	| dirFor
	| dirIf
	| dirMacroDef
	| dirParse
	| dirDefine
	| LCURLY dirParse RCURLY
	| dirInclude
	| LCURLY dirInclude RCURLY
	| dirEvaluate
	| LCURLY dirEvaluate RCURLY
	| dirStop
	| LCURLY dirStop RCURLY
	| dirBreak
	| LCURLY dirBreak RCURLY
	| dirMacrocall
	| LCURLY dirMacrocall RCURLY
	)
	;

//one line calls
dirSet: SET LPAREN Reference Identifier ATTRIB expr RPAREN;
dirParse: PARSE LPAREN expr RPAREN;
dirInclude: INCLUDE LPAREN expr RPAREN;
dirEvaluate: EVALUATE LPAREN expr RPAREN;
dirStop: STOP;
dirBreak: BREAK;

//mixed call
dirMacrocall: Identifier LPAREN expr* RPAREN
	| AT Identifier LPAREN expr* RPAREN template dirEnd;

//block calls
dirDefine: DEFINE LPAREN Reference Identifier RPAREN template dirEnd;
dirFor: FOR LPAREN Reference Identifier IN expr RPAREN template dirElse? dirEnd
	| LCURLY FOR LPAREN Reference Identifier IN expr RPAREN RCURLY template dirElse? dirEnd
	;
dirIf: IF LPAREN expr RPAREN template dirElseif* dirElse? dirEnd
	| LCURLY IF LPAREN expr RPAREN RCURLY template dirElseif* dirElse? dirEnd
	;
dirElseif: Directive ELSEIF LPAREN expr RPAREN template
	| Directive LCURLY ELSEIF LPAREN expr RPAREN RCURLY template 
	;
dirElse: Directive ELSE template
	| Directive LCURLY ELSE RCURLY template
	;
dirEnd: Directive END 
	| Directive LCURLY END RCURLY
	;
dirMacroDef: MACRO LPAREN Identifier (Reference Identifier (ATTRIB literal)? )* RPAREN
	template 
	dirEnd;

