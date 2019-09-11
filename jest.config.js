const package = require('./package.json');

module.exports = {
    cacheDirectory: '<rootDir>/.jest/cache',
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
    coverageReporters: ['lcov', 'json', 'text'],
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 85,
            lines: 85,
            statements: 85,
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
