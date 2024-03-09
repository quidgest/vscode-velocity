import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
	files: 'out/test/**/*.test.js',
	workspaceFolder: '../testData',
	extensionDevelopmentPath: "..",
	mocha: {
		ui: 'bdd',
		timeout: 20000
	  }
});