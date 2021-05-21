module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier-standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['import', 'node', 'prettier', 'promise', 'vue'],
  rules: { 'prettier/prettier': 'off', 'no-unused-vars': 'off' }
}
