import { sortText } from './sort';
import { getSelectedText, setSelectedText } from './utils/text';
import * as vscode from 'vscode';
import { noop } from './utils/functions';
import { getOptions } from './utils/options';

import * as R from 'ramda';

export const activate = (context: vscode.ExtensionContext) => {
    const disposable = vscode.commands.registerCommand(
        'sort-js-object.sort',
        R.pipe(
            R.converge(sortText, [getSelectedText, getOptions]),
            setSelectedText,
        ),
    );

    context.subscriptions.push(disposable);
};

export const deactivate = noop;
