import { sortText } from './../src/sort';

import * as fs from 'fs';
import * as path from 'path';

const files = fs.readdirSync(__dirname);

files
    .filter(file => file.includes('.input.'))
    // uncomment to filter specs
    // .filter(file => file.includes('spread'))
    .forEach(inputFile => {
        const outputFile = inputFile.replace('.input.', '.output.');
        const [input, output] = [inputFile, outputFile].map(file => {
            try {
                return fs.readFileSync(path.resolve(__dirname, file)).toString();
            } catch (e) {
                console.error(`Filed to read file ${file}`);
            }
        });

        const name = inputFile.substr(0, inputFile.indexOf('.input.'));

        it(`then ${name} should match the output`, () => {
            expect(sortText(input, { interface: true, enum: true })).toEqual(output);
        });
    });
