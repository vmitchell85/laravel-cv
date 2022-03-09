module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        module: true,
        require: true,
        watch: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-strongly-recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    ['props', 'propsData'],
                    'data',
                    'computed',
                    'methods',
                    'watch',
                    ['components', 'directives', 'filters'],
                    'mixins',
                ],
            },
        ],
        'vue/attributes-order': ['error'],
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/require-prop-types': 'off',
        'vue/prop-name-casing': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/no-mutating-props': 'off',
    },
};
