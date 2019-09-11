import { sortText } from './sort';
import { getSelectedText, setSelectedText } from './utils/text';
import * as vscode from 'vscode';
import { noop } from './utils/functions';

import { pipe, compose } from 'rambda';

export const activate = (context: vscode.ExtensionContext) => {
    const disposable = vscode.commands.registerCommand(
        'sort-js-object.sort',
        compose<string, any, any>(
            setSelectedText,
            pipe<string, string>(
                getSelectedText,
                sortText,
            ),
        ),
    );

    context.subscriptions.push(disposable);
};

export const deactivate = noop;
