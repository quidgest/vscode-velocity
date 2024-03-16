## Development

- Run `npm install` in this folder. This installs all necessary npm modules in both the client and server folder
- Open VS Code on this folder.
- Press Ctrl+Shift+B to compile the client and server.
- Switch to the Debug viewlet.
- Select `Launch Client` from the drop down.
- Run the launch config.
- If you want to debug the server as well use the launch configuration `Attach to Server`
- In the [Extension Development Host] instance of VSCode, open a document with '.vm' extension to activate Velocity language mode.

If you make changes to the grammar, the generated parsers will not update automatically so you will need to run the `npm run build` task manually.

To test the grammar, run the `npm run test` target in the server directory.

To test the client, change the launch target to `Language Server E2E Test` in the debug tab of vscode, then run. The debug console should present the test results.

To publish, ensure you have the publishing tool installed/upgraded with `npm install -g vsce`, then you can run `vsce package` to create a .vsix plugin.

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