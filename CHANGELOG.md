## Release Notes

### 1.0.9
- Fixes grammar to allow empty dictionary literal
- Improves diagnostic errors for closing blocks like loops and ifs
- Removes allowing else attached to foreach directive, since there was no velocity reference found for it

### 1.0.8
- Fixes grammar to allow empty collection literal
- Relaxes grammar for directives, to allow custom parameterless directives

### 1.0.7
- Added language associated icon
- Fixes grammar support for references in ranges
- Fix syntax highlighting for macros with body
- Add helps for keywords during autocomplete

### 1.0.6
- Adds semantic highlighting for external variables, methods, functions and macros
- Fixes some syntax highlight tags and makes them all have the 'velocity' qualifier
- Improves gramar error recovery for references

### 1.0.5
- Upgraded dependencies to recent versions. Vscode version required is now 1.86.0
- Fixes missing snippets

### 1.0.4
- Adds support for dictionarys and alternate values for references, making it compatible with Velocity 2.1 version
- Adds support for symbol renaming
- Adds support for symbol reference finding within the template
- Folding is now done in the language server for cycles, conditions and macro definitions

### 1.0.3
- Adds syntax highlighting for block escapes
- Fixes some edge cases in the lexer causing some false diagnostics

### 1.0.2
- Added support for most of the advanced language syntax
- Basic autocomplete for inline macros and defines
- Added lots of unit tests to the parser
- Added lexing errors to the diagnostics output

### 1.0.1
- first version