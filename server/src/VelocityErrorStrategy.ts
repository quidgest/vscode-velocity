import { 
	DefaultErrorStrategy, 
	InputMismatchException, 
	Parser 
} from 'antlr4ts';
import { VelocityParser } from './VelocityParser';
import { VelocityLexer } from './VelocityLexer';

//https://github.com/antlr/antlr4/pull/1969


export class VelocityErrorStrategy extends DefaultErrorStrategy
{
	// @Override
	sync(recognizer: Parser): void {
		//console.log("current token1 = ", recognizer.currentToken.text, recognizer.currentToken.type);
		//We need to get RULE_reference a little help understanding its expected tokens.
		//Even through we are not in recovery mode yet, we preemptively look ahead for
		// any unexpected tokens, and if we find them and cant recover  then we immediately make the rule fail without more retrys.
		//Without this code the parser just gives up at EOF and does not complete the rest of the parsing.
		if(recognizer.ruleContext.ruleIndex == VelocityParser.RULE_reference)
		{
			let tokens = recognizer.inputStream;
			let la = tokens.LA(1);

			//this is the expensive call of this check, but I don't know way to filter it or cache it
			//let expecting = recognizer.getExpectedTokens();
			//console.log(expecting);
			if(!recognizer.isExpectedToken(la))
			{
				//console.log("recovery unwanted",VelocityLexer.VOCABULARY.getSymbolicName(la),  this.inErrorRecoveryMode(recognizer));
				//console.log("current token = ", recognizer.currentToken.text);
				//console.log("current rule = ",  recognizer.ruleNames[recognizer.ruleContext.ruleIndex], recognizer.ruleContext.text);
				
                throw new InputMismatchException(recognizer);
			}
		}

		super.sync(recognizer);
	}
}