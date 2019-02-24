const { resolve } = require('path');

module.exports = {
  extends: resolve(__dirname, '../../src/server/.eslintrc.js'),
  plugins: [
    'jest'
  ],
  env: {
    'jest/globals': true
  }
};
