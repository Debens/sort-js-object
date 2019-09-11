import * as vscode from 'vscode';

export const getSelectedText = () => {
    const editor = getEditor();

    return editor.document.getText(editor.selection);
};

export const setSelectedText = (text: string) => {
    const editor = getEditor();

    return editor.edit(builder => builder.replace(editor.selection, text));
};

export const getEditor = () => vscode.window.activeTextEditor;
