const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

const ROOTDIR = resolve(__dirname, '../');
const SRCDIR = resolve(ROOTDIR, './src/server');
const DSTDIR = resolve(ROOTDIR, './dist');

const APP_VERSION = require(resolve(ROOTDIR, './package.json')).version;

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
    }),
    new DefinePlugin({
      'process.env.APP_VERSION': JSON.stringify(APP_VERSION)
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
