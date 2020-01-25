# Velocity Language Service

This extension aims to implement a complete language service for the [Apache Velocity](https://velocity.apache.org/engine/devel/vtl-reference.html) template language.

## Functionality

This Language Server works with `.vm` or `.vt` extension files. It has the following language features:
- Syntax highlighting
- Completions for variables, directives and methods
- Code folding
- Parsing diagnostics
- Snippets

## Release Notes

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

## Limitations

This is an early version of the extension. In the future hopefully some, or all, of these limitations will be addressed:

- No support for Dictionarys and Alternate values for references.
- Only single files are supported now. Workspace scanning or global symbols are not available.
- Only syntax error checking is available. No semantic checks are implemented yet.
- Velocity does not type its variables, making method inference hard. Method autocomplete currently uses a global list of symbols.
- Folding does not use the language server yet. This makes vscode mix indentation based folding with regex folding.

## Development

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`
- In the [Extension Development Host] instance of VSCode, open a document with '.vm' extension to activate Velocity language mode.

If you make changes to the grammar, the generated parsers will not update automatically so you will need to run the `npm run compile` task manually.

To test, change the launch target to `Language Server E2E Test` in the debug tab of vscode, then run. The debug console should present the test results.

To publish, ensure you have the publishing tool installed with `npm install -g vsce`, then you can run `vsce package` to create a .vsix plugin.

### Project structure
```
.
├── client // Language Client
│   ├── src
│   │   ├── test // End to End tests for Language Client / Server
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest.
├── server // Language Server
│   └── src
│       └── server.ts // Language Server entry point
├── syntaxes //grammar definitions
└── snippets
```

## Credits

The syntax highlighting was based on the grammar from project [sodatea/vscode-velocity](https://github.com/sodatea/vscode-velocity). It was translated to a tmGrammar.json format and indented to facilitate readability. A few bugs were fixed and a few simplifications were made.

Project structure followed the microsoft sample for the [language server extension](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample).

Parsing was implemented in Antlr4, using the [antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts) target for Typescript.

## License
This project is provided under the MIT license. Please see `license` file for more details.

  Copyright 2020 Quidgest
