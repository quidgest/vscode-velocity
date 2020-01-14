# Velocity Language Service

This extension aims to implement a complete language service for the Velocity template language.

## Functionality

This Language Server works vm extension files. It has the following language features:
- Syntax highlighting
- Completions for variables, directives and methods
- Code folding
- Parsing diagnostics
- Snippets

It also includes an End-to-End test.

## Structure

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
├── Syntaxes //grammar definitions
└── Snippets
```

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

To test, change the launch target to `Language Server E2E Test` in the debug tab. The debug console should present the test results.

## Publishing

## Dependencies

The syntax highlighting was based on the grammar from project [sodatea/vscode-velocity](https://github.com/sodatea/vscode-velocity). It was translated to a tmGrammar.json format and indented to facilitate readeability. A few bugs were fixed and a few simplifications were made.

Project structure followed the microsoft sample for the [language server extension](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample).

Parsing was implemented using the [Antlr4](https://github.com/antlr/antlr4) target for Typescript.

## Licence
This project is provided under the MIT licence. Please see `Licence.txt` for more details.

  Copyright 2020 Quidgest
