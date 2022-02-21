"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
require("hexeditor");
let fs = require('fs');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "fyrox-ge-extension" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('fyrox-ge-extension.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from Fyrox GE Extension!');
    });
    context.subscriptions.push(disposable);
    vscode.commands.registerCommand('extension.newScene', () => {
        vscode.workspace.openTextDocument({ content: undefined, language: 'yaml' }).then(doc => {
            vscode.window.showTextDocument(doc);
            doc.save();
        });
    });
    vscode.commands.registerCommand('extension.loadScene', (file) => {
        fs.readFileSync(file, 'binary');
    });
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map