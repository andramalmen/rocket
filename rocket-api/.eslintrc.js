module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    env: {
        amd: true,
        node: true,
        jest: true,
    },
    rules: {
        strict: ['error', 'never'],
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
