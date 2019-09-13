import { parseText } from './parse';
import { Node } from '@babel/types';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as R from 'ramda';

export interface ISortOptions {
    interface: boolean;
    enum: boolean;
}

export const sortText = (text: string, options: ISortOptions) => {
    const tree = parseText(text);
    sort(tree, options);

    return generate(tree, {}, text).code;
};

const sort = (tree: Node, options: ISortOptions) =>
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
        TSInterfaceBody(path) {
            if (options.interface) {
                path.node.body = path.node.body.sort(nodeOrder);
            }
        },
        TSEnumDeclaration(path) {
            if (options.enum) {
                path.node.members = path.node.members.sort(nodeOrder);
            }
        },
    });

const nodeOrder = <NodeType>(a: NodeType, b: NodeType) => {
    const [aKey, bKey] = [a, b].map(getIdentifier);

    return [typeof aKey, typeof bKey].includes('undefined') ? 0 : keyOrder(aKey, bKey);
};

const keyOrder = (a: string, b: string) =>
    a.toString().localeCompare(b.toString(), 'en', {
        numeric: true,
        sensitivity: 'base',
        caseFirst: 'upper',
    });

const firstDefinedValue = (...args: string[]): string =>
    args.find(arg => typeof arg !== 'undefined');

const getIdentifier = R.converge(firstDefinedValue, [
    R.path(['key', 'name']),
    R.path(['key', 'value']),
    R.path(['id', 'name']),
]);
