module.exports = {
  env: {
    browser: true,
    commonjs: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  extends: [
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
