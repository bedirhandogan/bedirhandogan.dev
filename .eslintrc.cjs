module.exports = {
   root: true,
   env: {
      node: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
   ],
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['vue'],
   rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
   },
}