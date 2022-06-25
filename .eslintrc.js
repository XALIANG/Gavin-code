module.exports = {
    env: {
        node: true,
    },
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/vue',
        '@ecomfe/eslint-config/typescript',
    ],
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    globals: {
        defineEmits: true,
        defineProps: true,
    },
    rules: {

    },
};
