import { parseText } from './parse';
import { Node, Identifier } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

export const sortText = (text: string) => {
    const tree = parseText(text);
    sort(tree);

    return generate(tree, {}, text).code;
};

const sort = (tree: Node) =>
    traverse(tree, {
        ObjectExpression(path) {
            path.node.properties = path.node.properties.sort(nodeOrder);
        },
        ObjectPattern(path) {
            path.node.properties = path.node.properties.sort(nodeOrder);
        },
        ObjectTypeAnnotation(path) {
            path.node.properties = path.node.properties.sort(nodeOrder);
        },
    });

const nodeOrder = (a: Node, b: Node) => {
    if (!hasIdentifier(a) || !hasIdentifier(b)) {
        return 0;
    }

    return keyOrder(a.key.name || a.key.value, b.key.name || b.key.value);
};

const hasIdentifier = (node: any): node is { key: Identifier } => node && node.key;
const keyOrder = (a: string = '', b: string = '') =>
    a
        .toString()
        .toLowerCase()
        .localeCompare(b.toString().toLowerCase(), undefined, { numeric: true });
