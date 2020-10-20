module.exports = {
    testEnvironment: 'jest-environment-node',
    collectCoverageFrom: ['**/src/**/*.(ts|tsx)'],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
    },
    watchPlugins: [
        'jest-watch-select-projects',
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
};
