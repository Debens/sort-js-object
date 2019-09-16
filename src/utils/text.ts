import * as vscode from 'vscode';

export const getSelectedText = () => {
    const editor = getEditor();

    return editor.document.getText(editor.selection);
};

export const getFileText = () => {
    const editor = getEditor();

    return editor.document.getText();
};

export const setSelectedText = (text: string) => setText(getEditor().selection, text);

export const setFileText = (text: string) =>
    setText(documentRange(getEditor().document), text);

const setText = (range: vscode.Range, text: string) =>
    getEditor().edit(builder => builder.replace(range, text));

const documentRange = (document: vscode.TextDocument): vscode.Range => {
    const last = document.lineCount - 1;

    return new vscode.Range(0, 0, last, document.lineAt(last).text.length);
};

export const getEditor = () => vscode.window.activeTextEditor;
