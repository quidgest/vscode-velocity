import * as assert from 'assert';
import * as antlr4ts from "antlr4ts"
import * as VelocityLexer_1 from "../src/VelocityLexer"
import * as VelocityParser_1 from "../src/VelocityParser"
import {VelocityErrorStrategy} from "../src/VelocityErrorStrategy"

//Flattens the parsing tree into a sequence of rule calls to make it easier to test for
function sequenceTree(tree){
	var c = [];
	c.push(tree.ruleIndex);

	for (var i = 0; i < tree.childCount; i++) {
		var x = tree.getChild(i);
		if(x.ruleIndex !== undefined)
		{
			c = c.concat(sequenceTree(x));
		}
	}

	return c;
}

const debugMode = false;

function assertParsing(inputString, expectedTokens, expectedRules, expectedErrors)
{

	if(debugMode)
	{
		console.log(inputString);
		console.log("--- lexer ---");
	}
	let inputStream = antlr4ts.CharStreams.fromString(inputString);
	const lexer = new VelocityLexer_1.VelocityLexer(inputStream);

	for (var token = lexer.nextToken(), ex = 0; token.type != antlr4ts.Token.EOF && ex < expectedTokens.length ; token = lexer.nextToken(), ex++)
	{
		if(debugMode)
			console.log(token.toString());
		else
			assert.equal(token.type, expectedTokens[ex], 'wrong token "' + token.text + '" at position ' + ex);
	}

	if(debugMode)
		console.log("--- parser ---");

	lexer.reset();
	const tokenStream = new antlr4ts.CommonTokenStream(lexer);
	const parser = new VelocityParser_1.VelocityParser(tokenStream);
	parser.errorHandler = new VelocityErrorStrategy();

	const tree = parser.templateFile();
	
	if(debugMode)
	{
		console.log(tree.toStringTree(parser));
	}
	else
	{
		if(expectedRules)
		{
			if(!expectedErrors)
				assert.equal(parser.numberOfSyntaxErrors, 0, 'parsing errors found');
			else
				assert.equal(parser.numberOfSyntaxErrors, 2, 'parsing errors found');
			const rules = sequenceTree(tree);
			assert.equal(rules.length, expectedRules.length, 'parsing production rules count was ' + rules.length + ' but expected ' + expectedRules.length);
			for(var er=0; er < expectedRules.length; er++)
				assert.equal(rules[er], expectedRules[er], 'wrong parsing rule "' + parser.ruleNames[rules[er]] +  '" at position ' + er);
		}
	}
}

/**
 * Testing for all the use cases referenced in:
 * https://velocity.apache.org/engine/devel/vtl-reference.html
 */
describe('VelocityParser', function() {

	var vtlToken = VelocityLexer_1.VelocityLexer;
	var vtlParser = VelocityParser_1.VelocityParser;

	//----------------------------------------------------------
	// ERRORS
	//----------------------------------------------------------
	describe('Error recovery', function() {
		it('should recover from bad references', function() {
			assertParsing("asd $xpto($inside) sad $another", [
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_reference,
				vtlParser.RULE_reference,
			], 
			2
			);
		});
		/*
		//the same recovery method for references doesnt work here

		it.only('should recover from bad directives', function() {
			assertParsing("asd # sad #if($x)no#end", [
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.Code,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_dirEnd,
			], 
			2
			);
		});
		*/
	});

	//----------------------------------------------------------
	// SET
	//----------------------------------------------------------
	describe('#set', function() {
		it('should attribute numbers', function() {
			assertParsing("#set($v = 3)", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]
			);
		});
		it('should attribute boolean true', function() {
			assertParsing("#set($v = true)", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.BOOL,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]
			);
		});
		it('should attribute boolean false', function() {
			assertParsing("#set($v = false)", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.BOOL,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]
			);
		});
		it('should attribute string literals', function() {
			assertParsing("#set($v = 'something')", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.STRING,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]);
		});
		it('should attribute references', function() {
			assertParsing("#set($v = $other)", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
			]);
		});
		it('should attribute template strings', function() {
			assertParsing("#set($v = \"text${other}text\")", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,

				vtlToken.DQUOTE,
				vtlToken.TEXT,
				vtlToken.Reference,
				vtlToken.LCURLY,
				vtlToken.Identifier,
				vtlToken.RCURLY,
				vtlToken.TEXT,
				vtlToken.DQUOTE,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_stringTemplate,
				vtlParser.RULE_reference,
			]);
		});
		it('should attribute collections', function() {
			assertParsing("#set($v = [1,2,3])", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,

				vtlToken.LBRAK,
				vtlToken.NUMBER,
				vtlToken.COMMA,
				vtlToken.NUMBER,
				vtlToken.COMMA,
				vtlToken.NUMBER,
				vtlToken.RBRAK,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_collection,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]);
		});
		it('should attribute ranges', function() {
			assertParsing("#set($v = [1..3])", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,

				vtlToken.LBRAK,
				vtlToken.NUMBER,
				vtlToken.DPOINT,
				vtlToken.NUMBER,
				vtlToken.RBRAK,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_range,
			]);
		});
		it('should attribute dictionarys', function() {
			assertParsing("#set($v = {\'banana\' : 40, \'roast beef\' : $isCarnivore})", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,

				vtlToken.LCURLY,
				vtlToken.STRING,
				vtlToken.COLON,
				vtlToken.NUMBER,
				vtlToken.COMMA,
				vtlToken.STRING,
				vtlToken.COLON,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RCURLY,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr,
				vtlParser.RULE_dictionary,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
			]);
		});
		

		it('should attribute arithmetic expressions', function() {
			assertParsing("#set($v = (1+2*$x)/3.5)", [
				vtlToken.Directive,
				vtlToken.SET,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,

				vtlToken.LPAREN,
				vtlToken.NUMBER,
				vtlToken.PLUS,
				vtlToken.NUMBER,
				vtlToken.MULT,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.DIV,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirSet,
				vtlParser.RULE_expr, //div
				vtlParser.RULE_expr, //parentisis
				vtlParser.RULE_expr, //sum
				vtlParser.RULE_expr, //mult

				vtlParser.RULE_expr, //sum left side
				vtlParser.RULE_literal,
				vtlParser.RULE_expr, //sum right side
				vtlParser.RULE_literal,

				vtlParser.RULE_expr, //mult right side
				vtlParser.RULE_reference,

				vtlParser.RULE_expr, //div right side
				vtlParser.RULE_literal,
			]);
		});
	});

	//----------------------------------------------------------
	// IF
	//----------------------------------------------------------
	describe('#if', function() {
		it('should enclose block', function() {
			assertParsing("#if($v > 3) text #end", [
				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GT,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should support complex conditional expressions', function() {
			assertParsing("#if($x >= 3 and (!$isTrue || $y == 5 ) ) text #end", [
				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,

				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GE,
				vtlToken.NUMBER,
				vtlToken.AND,
				vtlToken.LPAREN,
				vtlToken.NOT,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.OR,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.EQ,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
				
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,

				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,

				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,

				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});

		it('should chain blocks', function() {
			assertParsing("#if($v > 3) text #if($isTrue)$doIt#end text #end", [
				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GT,
				vtlToken.NUMBER,
				vtlToken.RPAREN,

				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Directive,
				vtlToken.END,

				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,

				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_dirEnd,
				
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should support elseif', function() {
			assertParsing("#if($v > 3) text #elseif($isTrue) text #end", [
				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GT,
				vtlToken.NUMBER,
				vtlToken.RPAREN,

				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.ELSEIF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,

				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_template,

				vtlParser.RULE_dirElseif,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,

				vtlParser.RULE_dirEnd,
			]);
		});

		it('should support elseif end else', function() {
			assertParsing("#if($v > 3) text #elseif($isTrue) text #else text #end", [
				vtlToken.Directive,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GT,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.ELSEIF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.ELSE,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_template,

				vtlParser.RULE_dirElseif,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,

				vtlParser.RULE_dirElse,
				vtlParser.RULE_template,

				vtlParser.RULE_dirEnd,
			]);
		});

		it('should disambiguate directives', function() {
			assertParsing("#{if($v > 3)}text#{elseif($isTrue)}text#{else}text#{end}more", [
				vtlToken.Directive,
				vtlToken.LCURLY,
				vtlToken.IF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.GT,
				vtlToken.NUMBER,
				vtlToken.RPAREN,
				vtlToken.RCURLY,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.LCURLY,
				vtlToken.ELSEIF,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.RCURLY,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.LCURLY,
				vtlToken.ELSE,
				vtlToken.RCURLY,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.LCURLY,
				vtlToken.END,
				vtlToken.RCURLY,

				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirIf,
				vtlParser.RULE_expr,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_template,

				vtlParser.RULE_dirElseif,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,

				vtlParser.RULE_dirElse,
				vtlParser.RULE_template,

				vtlParser.RULE_dirEnd,
			]);
		});

	});

	//----------------------------------------------------------
	// FOR
	//----------------------------------------------------------
	describe('#foreach', function() {
		it('should enclose block', function() {
			assertParsing("#foreach($elem in $collection) text #end", [
				vtlToken.Directive,
				vtlToken.FOR,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.IN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirFor,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should chain blocks', function() {
			assertParsing("#foreach($elem in $collection) text #foreach($elem2 in $elem.collection) text #end #end", [
				vtlToken.Directive,
				vtlToken.FOR,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.IN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.FOR,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.IN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.END,

				vtlToken.Code,

				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirFor,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,

				vtlParser.RULE_directive,
				vtlParser.RULE_dirFor,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_methodcall,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,

				vtlParser.RULE_dirEnd,
			]);
		});
		it('should allow break', function() {
			assertParsing("#foreach($elem in $collection) t #break t #end", [
				vtlToken.Directive,
				vtlToken.FOR,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.IN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.BREAK,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirFor,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirBreak,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should allow else', function() {
			assertParsing("#foreach($elem in $collection) t #else t #end", [
				vtlToken.Directive,
				vtlToken.FOR,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.IN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.ELSE,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirFor,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
				vtlParser.RULE_template,
				vtlParser.RULE_dirElse,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});

	});

	//----------------------------------------------------------
	// Comments
	//----------------------------------------------------------
	describe('##comments', function() {
		it('should ignore line comments', function() {
			assertParsing("text ##$ignored refecrence\r\nnot ignored", [
				vtlToken.Code,
				vtlToken.LineComment,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
			]);
		});

		it('should ignore block comments', function() {
			assertParsing("text #*$ignored reference\r\#if($ignored)\r\n*#not ignored", [
				vtlToken.Code,
				vtlToken.BlockComment,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
			]);
		});

		it('should copy unparsed content', function() {
			assertParsing("text #[[$ignored reference\r\#if($ignored)\r\n]]#not ignored", [
				vtlToken.Code,
				vtlToken.Code,
				vtlToken.Code,
				vtlToken.Code,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
			]);
		});
	});

	//----------------------------------------------------------
	// Directives
	//----------------------------------------------------------
	describe('#parse', function() {
		it('should parse', function() {
			assertParsing("#parse('filename.vm')", [
				vtlToken.Directive,
				vtlToken.PARSE,
				vtlToken.LPAREN,
				vtlToken.STRING,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirParse,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]);
		});
	});

	describe('#include', function() {
		it('should include', function() {
			assertParsing("#include('filename.txt')", [
				vtlToken.Directive,
				vtlToken.INCLUDE,
				vtlToken.LPAREN,
				vtlToken.STRING,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirInclude,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]);
		});
	});

	describe('#evaluate', function() {
		it('should evaluate', function() {
			assertParsing("#evaluate($var)", [
				vtlToken.Directive,
				vtlToken.EVALUATE,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirEvaluate,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
			]);
		});
	});

	describe('#define', function() {
		it('should define', function() {
			assertParsing("#define($var)text$var#end", [
				vtlToken.Directive,
				vtlToken.DEFINE,
				vtlToken.LPAREN,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirDefine,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_dirEnd,
			]);
		});
	});

	describe('#stop', function() {
		it('should stop template', function() {
			assertParsing("#stop", [
				vtlToken.Directive,
				vtlToken.STOP,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirStop,
			]);
		});
		it('should disambiguate stop', function() {
			assertParsing("text#{stop}text", [
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.LCURLY,
				vtlToken.STOP,
				vtlToken.RCURLY,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirStop,
			]);
		});
	});

	//----------------------------------------------------------
	// Macros
	//----------------------------------------------------------
	describe('#macro', function() {
		it('should define macro', function() {
			assertParsing("#macro( something )some text $ref more text#end", [
				vtlToken.Directive,
				vtlToken.MACRO,
				vtlToken.LPAREN,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacroDef,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should define macro with parameters', function() {
			assertParsing("#macro( something $p1 $p2)more text#end", [
				vtlToken.Directive,
				vtlToken.MACRO,
				vtlToken.LPAREN,
				vtlToken.Identifier,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacroDef,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should define macro with default values', function() {
			assertParsing("#macro( something $p1 = 3 $p2 = 'x')more text#end", [
				vtlToken.Directive,
				vtlToken.MACRO,
				vtlToken.LPAREN,
				vtlToken.Identifier,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.NUMBER,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.ATTRIB,
				vtlToken.STRING,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacroDef,
				vtlParser.RULE_literal,
				vtlParser.RULE_literal,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});

		it('should call macro', function() {
			assertParsing("#something()", [
				vtlToken.Directive,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacrocall,
			]);
		});
		it('should call macro with arguments', function() {
			assertParsing("#something(3 $v)", [
				vtlToken.Directive,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.NUMBER,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacrocall,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
			]);
		});
		it('should call macro with body', function() {
			assertParsing("#@something() body #end", [
				vtlToken.Directive,
				vtlToken.AT,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.RPAREN,
				vtlToken.Code,
				vtlToken.Directive,
				vtlToken.END,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_directive,
				vtlParser.RULE_dirMacrocall,
				vtlParser.RULE_template,
				vtlParser.RULE_dirEnd,
			]);
		});
		it('should espace directive', function() {
			assertParsing("\\#something()", [
				vtlToken.EscapeCode,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
			]);
		});
	});


	//----------------------------------------------------------
	// References
	//----------------------------------------------------------
	describe('$reference', function() {
		it('should mix references with text', function() {
			assertParsing("text $reference text", [
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
			]);
		});
		it('should disambiguate references', function() {
			assertParsing("text${reference}text", [
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.LCURLY,
				vtlToken.Identifier,
				vtlToken.RCURLY,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
			]);
		});
		it('should allow nullable refenrences', function() {
			assertParsing("$!reference", [
				vtlToken.Reference,
				vtlToken.BANG,
				vtlToken.Identifier,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
			]);
		});
		it('should disambiguate nullable refenrences', function() {
			assertParsing("$!{reference}", [
				vtlToken.Reference,
				vtlToken.BANG,
				vtlToken.LCURLY,
				vtlToken.Identifier,
				vtlToken.RCURLY,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
			]);
		});	
		it('should stop references at word end', function() {
			assertParsing("text{$reference}text", [
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
			]);
		});
		it('should stop references at invalid sequence', function() {
			assertParsing("text$reference.func()(text)", [
				vtlToken.Code,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.RPAREN,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_functioncall,
			]);
		});
		it('should escape references', function() {
			assertParsing("text \\$reference text", [
				vtlToken.Code,
				vtlToken.EscapeCode,
				vtlToken.Code,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
			]);
		});

		it('should reference properties', function() {
			assertParsing("$reference.prop", [
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_methodcall,
			]);
		});
		it('should reference maps', function() {
			assertParsing("$reference['x']", [
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.LBRAK,
				vtlToken.STRING,
				vtlToken.RBRAK,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_indexcall,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
			]);
		});
		it('should reference functions', function() {
			assertParsing("$reference.func()", [
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_functioncall,
			]);
		});
		it('should reference functions with arguments', function() {
			assertParsing("$reference.func(2,'e',$ref)", [
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
				vtlToken.LPAREN,
				vtlToken.NUMBER,
				vtlToken.COMMA,
				vtlToken.STRING,
				vtlToken.COMMA,
				vtlToken.Reference,
				vtlToken.Identifier,
				vtlToken.RPAREN,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_functioncall,
				vtlParser.RULE_arglist,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_literal,
				vtlParser.RULE_expr,
				vtlParser.RULE_reference,
			]);
		});
		it('should reference with alternate value', function() {
			assertParsing("${reference.prop|'empty'}", [
				vtlToken.Reference,
				vtlToken.LCURLY,
				vtlToken.Identifier,
				vtlToken.DOT,
				vtlToken.Identifier,
				vtlToken.PIPE,
				vtlToken.STRING,
				vtlToken.RCURLY,
			],
			[
				vtlParser.RULE_templateFile,
				vtlParser.RULE_template,
				vtlParser.RULE_reference,
				vtlParser.RULE_call,
				vtlParser.RULE_methodcall,
				vtlParser.RULE_literal,
			]);
		});


	});


});