const { resolve } = require('path');

const ROOTDIR = resolve(__dirname, '../');
const SRCDIR = resolve(ROOTDIR, './src/server');
const DSTDIR = resolve(ROOTDIR, './dist');

module.exports = {
  name: 'server',
  entry: resolve(SRCDIR, './index.ts'),
  output: {
    path: DSTDIR,
    filename: 'index.js'
  },
  target: 'node',
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              moduleResolution: 'node'
            }
          }
        },
        exclude: resolve(ROOTDIR, './node_modules')
      }
    ]
  }
};
