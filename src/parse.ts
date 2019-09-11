import { parse } from '@babel/parser';
import { Node } from '@babel/types';

export const parseText = (text: string): Node => {
    try {
        return parseProgram(text);
    } catch (e) {
        throw new Error(`Failed to parse text: ${text}`);
    }
};

const parseProgram = (text: string) =>
    parse(text, {
        sourceType: 'module',
        plugins: ['typescript', 'objectRestSpread', 'decorators-legacy'],
    });
