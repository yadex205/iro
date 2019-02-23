const { resolve } = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

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
  plugins: [
    new NodemonPlugin({
      restartable: 'rs',
      verbose: true,
      watch: [
        DSTDIR
      ],
      ignore: [
        resolve(DSTDIR, './public')
      ],
      script: resolve(DSTDIR, './index.js')
    })
  ],
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
