const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    es6: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: resolve(__dirname, './tsconfig.json')
  },
  rules: {
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-eq-null': 2,
    'consistent-return': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    'default-case': 2,
    'no-alert': 2,
    'no-caller': 2,
    'complexity': [2, { max: 5 }],
    'no-dupe-class-members': 2,
    'no-magic-numbers': [2, { ignoreArrayIndexes: false, detectObjects: false, ignore: [0, 1] }],
    'no-irregular-whitespace': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-eval': 2,
    'no-trailing-spaces': 2,
    'camelcase': 0,
    '@typescript-eslint/camelcase': 0,
    'indent': [2, 2, { ObjectExpression: 'first' }],
    '@typescript-eslint/indent': [2, 2, { ObjectExpression: 'first' }],
    'new-parens': 2,
    'no-floating-decimal': 2,
    'no-array-constructor': 2,
    'object-curly-spacing': [2, 'always'],
    'key-spacing': [2, { beforeColon : false, afterColon: true, mode: 'minimum' }],
    'no-multi-spaces': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'no-spaced-func': 2,
    'space-infix-ops': [2, { int32Hint: false }],
    'space-in-parens': [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'semi': [2, 'always'],
    'linebreak-style': [2, 'unix'],
    'eol-last': 2,
    'yoda': 2,
    'quotes': [2, 'single', { allowTemplateLiterals: true }]
  }
};
