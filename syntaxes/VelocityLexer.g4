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
Directive: '#' -> pushMode(MODEPREDIR);
Reference: '$' -> pushMode(MODEPREREF);

//-------------------------------------
mode MODEPREREF;
//-------------------------------------
BANG: '!';
LCURLY: '{' -> mode(MODEREFCURLY);
EMPTY1: -> skip, mode(MODEREF);

//-------------------------------------
mode MODEREF;
//-------------------------------------
Identifier
    :   FragIdentifier -> mode(MODEREF2)
    ;

//-------------------------------------
mode MODEREF2;
//-------------------------------------
DOT: '.' -> mode(MODEREF);
REF_LPAREN : '(' -> type(LPAREN), pushMode(MODEVTL);
//This generates Warning 146, non-fragment lexer rule EMPTY can match the empty string
//The warning is there to prevent infinite loops, but since we are poping a state, this is a correct behaviour
//It is also the only way to implement Velocity behaviour right now, until there is a way to match a rule without
//   consuming a character. Basically a lookahead that we can use to switch context modes. This solution works by
//   matching the empty rule last, meaning 'if every other rule fails we pop out of this mode'
EMPTY2: -> skip, popMode;

//-------------------------------------
mode MODEREFCURLY;
//-------------------------------------
CURLY_Identifier
    :   FragIdentifier -> type(Identifier), mode(MODEREFCURLY2)
    ;

//-------------------------------------
mode MODEREFCURLY2;
//-------------------------------------
CURLY_DOT: '.' -> type(DOT), mode(MODEREFCURLY);
CURLY_LPAREN : '(' -> type(LPAREN), pushMode(MODEVTL);
RCURLY : '}' -> popMode;

//-------------------------------------
mode MODEPREDIR;
//-------------------------------------
DIR_LCURLY: '{' -> type(LCURLY), mode(MODEDIRCURLY);
EMPTY3: -> skip, mode(MODEDIR);

//-------------------------------------
mode MODEDIR;
//-------------------------------------
SET: 'set';
FOR: 'foreach';
IF: 'if';
ELSEIF: 'elseif';
ELSE: 'else' -> popMode;
END: 'end' -> popMode;
STOP: 'stop' -> popMode;
PARSE: 'parse';
DIR_LPAREN: '(' -> type(LPAREN), mode(MODEVTL);
Function: FragIdentifier -> type(Identifier);
DIR_WhiteSpace: [ \t\r\n]+ -> skip;

//-------------------------------------
mode MODEDIRCURLY;
//-------------------------------------
DIRC_SET: 'set' -> type(SET);
DIRC_FOR: 'foreach' -> type(FOR);
DIRC_IF: 'if' -> type(IF);
DIRC_ELSEIF: 'elseif' -> type(ELSEIF);
DIRC_ELSE: 'else' -> type(ELSE);
DIRC_END: 'end' -> type(END);
DIRC_STOP: 'stop' -> type(STOP);
DIRC_PARSE: 'parse' -> type(PARSE);
DIRC_LPAREN: '(' -> type(LPAREN), pushMode(MODEVTL);
DIRC_Function: FragIdentifier -> type(Identifier);
DIRC_RCURLY: '}' -> type(RCURLY), popMode;
DIRC_WhiteSpace: [ \t\r\n]+ -> skip;

//-------------------------------------
mode MODEVTL;
//-------------------------------------
NUMBER: Digit+ ('.' Digit+)?;
BOOL: 'true' | 'false';

VTL_Reference: '$' -> type(Reference), pushMode(MODEPREREF);

LPAREN : '(' -> pushMode(MODEVTL);
RPAREN : ')' -> popMode;
DPOINT: '..';

COMMA: ',';
DQUOTE: '"' -> pushMode(MODESTR);
STRING: '\''[^']*'\'';
IN: 'in';
LBRAK: '[';
RBRAK: ']';

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

UNKNOWN : [a-zA-Z_]+;
VTL_UNKNOWN2 : '#' -> type(Directive), mode(MODEDIR);

//-------------------------------------
mode MODESTR;
//-------------------------------------
TEXT: ~[\\$"]+;
ESCAPETEXT: '\\'.;
STR_DQUOTE: '"' -> type(DQUOTE), popMode;
STR_Reference: '$' -> type(Reference), pushMode(MODEPREREF);