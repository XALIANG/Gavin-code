module.exports = {
    env: {
        browser: true,
        node: true,
        // es2021: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        requireConfigFile: false,
    },
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/vue',
        '@ecomfe/eslint-config/typescript',
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'trailingComma': 'none',
        "eqeqeq": false

    },
    // https://eslint.org/docs/latest/use/configure/language-options#specifying-globals
    globals: {
        defineEmits: true,
        defineProps: true,
    },
};
