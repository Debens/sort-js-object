import { sortText } from './sort';
import { getSelectedText, getFileText, setFileText, setSelectedText } from './utils/text';
import * as vscode from 'vscode';
import { noop } from './utils/functions';
import { getOptions } from './utils/options';

import * as R from 'ramda';
export const activate = (context: vscode.ExtensionContext) =>
    context.subscriptions.concat([
        vscode.commands.registerCommand(
            'sort-js-object.sort',
            R.pipe(
                R.converge(sortText, [getSelectedText, getOptions]),
                setSelectedText,
            ),
        ),
        vscode.commands.registerCommand(
            'sort-js-object.sort-file',
            R.pipe(
                R.converge(sortText, [getFileText, getOptions]),
                setFileText,
            ),
        ),
    ]);

export const deactivate = noop;
