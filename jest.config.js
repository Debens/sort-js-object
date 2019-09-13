const package = require('./package.json');

module.exports = {
    cacheDirectory: '<rootDir>/.jest/cache',
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
    coverageReporters: ['lcov', 'json', 'text'],
    coverageThreshold: {
        global: {
            branches: 50, // FIXME: add specs for all options
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    displayName: package.name,
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.json',
        },
    },
    moduleFileExtensions: ['js', 'ts'],
    name: package.name,
    reporters: ['default'],
    testPathIgnorePatterns: ['\\.snap$', 'node_modules/', 'build/'],
    transform: {
        '\\.(ts|tsx)$': 'ts-jest',
    },
    verbose: true,
};
