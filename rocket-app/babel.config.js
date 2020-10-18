module.exports = {
    presets: ['next/babel'],
    env: {
        test: {
            presets: [
                [
                    'next/babel',
                    {
                        'preset-env': {
                            modules: 'commonjs',
                        },
                    },
                ],
            ],
            plugins: ['dynamic-import-node'],
        },
    },
    plugins: ['@babel/plugin-proposal-do-expressions'],
};
