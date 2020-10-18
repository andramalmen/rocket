const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, './'),
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
