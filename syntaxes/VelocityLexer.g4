/*!
 * Copyright 2019 Quidgest. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for license information.
 */
 lexer grammar VelocityLexer;

//-------------------------------------
channels {
    COMMENTS
}
//-------------------------------------

//-------------------------------------
//global fragments
//-------------------------------------
fragment
FragIdentifier
    :   Nondigit (Nondigit | Digit)*
    ;

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

//-------------------------------------
//default mode
//-------------------------------------
Code: ~[\\$#]+;
EscapeCode: '\\'.;
BlockComment
    :   '#*' .*? '*#'
        -> channel(COMMENTS)
    ;

LineComment
    :   '##' ~[\r\n]* ('\n' | '\r\n' | EOF)
        -> channel(COMMENTS)
    ;

UnparsedStart
    : '#[[' -> skip, pushMode(MODEUNPARSED);

Directive: '#' -> pushMode(MODEPREDIR);
Reference: '$' -> pushMode(MODEPREREF);

//-------------------------------------
mode MODEUNPARSED;
//-------------------------------------
UnparsedEnd: ']]#' -> skip, popMode;
UNP_Code: ~[\]#]+ -> type(Code);
UNP_Code1: ']'+ -> type(Code);
UNP_Code2: '#'+ -> type(Code);

//-------------------------------------
mode MODEPREREF;
//-------------------------------------
BANG: '!';
LCURLY: '{' -> mode(MODEREFCURLY2), pushMode(MODEREF);
EMPTY1: -> skip, mode(MODEREF);

//-------------------------------------
mode MODEREF;
//-------------------------------------
Identifier: FragIdentifier -> mode(MODEREF2);
//parsing recovery back to text mode
VTL_UNKNOWN3 : . -> type(Code), popMode;

//-------------------------------------
mode MODEREF2;
//-------------------------------------
REF_LPAREN : '(' -> type(LPAREN), mode(MODEREF3), pushMode(MODEVTL);
EMPTY2: -> skip, mode(MODEREF3);

//-------------------------------------
mode MODEREF3;
//-------------------------------------
DOT: '.' -> mode(MODEREF);
REF_LBRAK : '[' -> type(LBRAK), pushMode(MODEVTL);
//This generates Warning 146, non-fragment lexer rule EMPTY can match the empty string
//The warning is there to prevent infinite loops, but since we are poping a state, this is a correct behaviour
//It is also the only way to implement Velocity behaviour right now, until there is a way to match a rule without
//   consuming a character. Basically a lookahead that we can use to switch context modes. This solution works by
//   matching the empty rule last, meaning 'if every other rule fails we pop out of this mode'
EMPTY3: -> skip, popMode;

//-------------------------------------
mode MODEREFCURLY2;
//-------------------------------------
RCURLY : '}' -> popMode;
PIPE : '|' -> pushMode(MODELITERAL);
//parsing recovery back to text mode
VTL_UNKNOWN0 : . -> popMode;

//-------------------------------------
mode MODELITERAL;
//-------------------------------------
LIT_NUMBER: Digit+ ('.' Digit+)? -> type(NUMBER);
LIT_BOOL: ('true' | 'false') -> type(BOOL);
LIT_STRING: '\''~[']*'\'' -> type(STRING);
EMPTY4: -> skip, popMode;

//-------------------------------------
mode MODEPREDIR;
//-------------------------------------
DIR_LCURLY: '{' -> type(LCURLY), mode(MODEDIRCURLY), pushMode(MODEDIR);
AT: '@';
//detect invalid directive early by poping back to Code
VTL_UNKNOWN4: [ \t\r\n]+ -> type(Code), popMode;
EMPTYD3: -> skip, mode(MODEDIR);

//-------------------------------------
mode MODEDIR;
//-------------------------------------
BREAK: 'break' -> popMode;
SET: 'set';
FOR: 'foreach';
IF: 'if';
ELSEIF: 'elseif';
ELSE: 'else' -> popMode;
END: 'end' -> popMode;
STOP: 'stop' -> popMode;
PARSE: 'parse';
INCLUDE: 'include';
EVALUATE: 'evaluate';
DEFINE: 'define';
MACRO: 'macro';
DIR_LPAREN: '(' -> type(LPAREN), mode(MODEVTL);
Function: FragIdentifier -> type(Identifier);
DIR_WhiteSpace: [ \t\r\n]+ -> skip;

//-------------------------------------
mode MODEDIRCURLY;
//-------------------------------------
DIRC_RCURLY: '}' -> type(RCURLY), popMode;
//parsing recovery back to text mode
VTL_UNKNOWN1 : . -> popMode;


//-------------------------------------
mode MODEVTL;
//-------------------------------------
NUMBER: Digit+ ('.' Digit+)?;
BOOL: 'true' | 'false';

VTL_Reference: '$' -> type(Reference), pushMode(MODEPREREF);

LPAREN : '(' -> pushMode(MODEVTL);
RPAREN : ')' -> popMode;
DPOINT: '..';

VTL_LCURLY : '{' -> type(LCURLY), pushMode(MODEVTL);
VTL_RCURLY : '}' -> type(RCURLY), popMode;
COLON: ':';

COMMA: ',';
DQUOTE: '"' -> pushMode(MODESTR);
STRING: '\''~[']*'\'';
IN: 'in';
LBRAK: '[' -> pushMode(MODEVTL);
RBRAK: ']' -> popMode;

PLUS: '+';
MINUS: '-';
DIV: '/';
MULT: '*';
MODUL: '%';

AND: '&&' | 'and';
OR: '||' | 'or';
NOT: '!' | 'not';
LT: '<'  | 'lt';
GT: '>'  | 'gt';
LE: '<=' | 'le';
GE: '>=' | 'ge';
EQ: '==' | 'eq';
NE: '!=' | 'ne';

ATTRIB: '=';

Whitespace
    :   [ \t]+
        -> skip
    ;

Newline
    :   (   '\r' '\n'?
        |   '\n'
        )
        -> skip
    ;

//This is necessary for the macro definitions. They start with a raw id rigth after the Lparen.
VTL_Identifier : FragIdentifier -> type(Identifier);

//recovery token
VTL_UNKNOWN2 : '#' -> type(Directive), mode(MODEDIR);

//-------------------------------------
mode MODESTR;
//-------------------------------------
TEXT: ~[\\$"]+;
ESCAPETEXT: '\\'.;
STR_DQUOTE: '"' -> type(DQUOTE), popMode;
STR_Reference: '$' -> type(Reference), pushMode(MODEPREREF);