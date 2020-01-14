/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
parser grammar VelocityParser;

options { tokenVocab=VelocityLexer; }

templateFile: template EOF;

template : (Code | EscapeCode | directive | reference)*;

reference : Reference BANG? Identifier call*
	      | Reference BANG? LCURLY Identifier call* RCURLY
		  ;

call : methodcall | functioncall;

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
	;

literal: STRING
	| NUMBER
	| BOOL
	;

stringTemplate: DQUOTE ( TEXT | ESCAPETEXT | reference )* DQUOTE;

collection: LBRAK expr (COMMA expr)* RBRAK;

directive: Directive 
	( dirSet
	| LCURLY dirSet RCURLY
	| dirFor
	| dirIf
	| dirParse
	| LCURLY dirParse RCURLY
	| dirStop
	| LCURLY dirStop RCURLY
	| dirMacrocall
	| LCURLY dirMacrocall RCURLY
	)
	;

//one line calls
dirSet: SET LPAREN Reference Identifier ATTRIB expr RPAREN;
dirParse: PARSE LPAREN expr RPAREN;
dirStop: STOP;
dirMacrocall: Identifier LPAREN arglist? RPAREN;

//block calls
dirFor: FOR LPAREN Reference Identifier IN expr RPAREN template dirEnd
	| LCURLY FOR LPAREN Reference Identifier IN expr RPAREN RCURLY template dirEnd
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

