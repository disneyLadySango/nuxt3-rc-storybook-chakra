module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:nuxt/recommended', 'plugin:storybook/recommended'],
  plugins: ['vue', '@typescript-eslint', '@typescript-eslint/eslint-plugin'],
  rules: {
    semi: ['error', 'never', {
      beforeStatementContinuationChars: 'never'
    }],
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-no-uses-vars': 'off'
  }
};