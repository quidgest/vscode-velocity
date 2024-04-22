# Velocity Language Service

This extension aims to implement a complete language service for the [Apache Velocity](https://velocity.apache.org/engine/devel/vtl-reference.html) template language.

## Functionality

This Language Server works with `.vm` or `.vt` extension files. It has the following language features:
- Syntax and Semantic highlighting
- Completions for variables, directives and methods
- Code folding
- Parsing diagnostics
- Snippets

## Release Notes

- Fixes grammar to allow empty dictionary literal
- Improves diagnostic errors for closing blocks like loops and ifs
- Removes allowing else attached to foreach directive, since there was no velocity reference found for it

## Limitations

In the future hopefully some, or all, of these limitations will be addressed:

- Only single files are supported now. Workspace scanning or global symbols are not available.
- Only syntax error checking is available. No semantic checks are implemented yet.
- Velocity does not type its variables, making method inference hard. Method autocomplete currently uses a global list of symbols.

## Credits

The syntax highlighting was based on the grammar from project [sodatea/vscode-velocity](https://github.com/sodatea/vscode-velocity). It was translated to a tmGrammar.json format and indented to facilitate readability. A few bugs were fixed and a few simplifications were made.

Project structure followed the microsoft sample for the [language server extension](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample).

Parsing was implemented in Antlr4, using the [antlr4ts](https://github.com/tunnelvisionlabs/antlr4ts) target for Typescript.

## License
This project is provided under the MIT license. Please see `license` file for more details.

  Copyright 2020 Quidgest
