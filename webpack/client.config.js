const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ROOTDIR = resolve(__dirname, '../');
const SRCDIR = resolve(ROOTDIR, './src/client');
const DSTDIR = resolve(ROOTDIR, './dist/public');

module.exports = {
  name: 'client',
  entry: resolve(SRCDIR, './js/app.ts'),
  output: {
    path: DSTDIR,
    filename: 'assets/js/app.js'
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolve(SRCDIR, './index.html'),
      inject: 'head'
    })
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: resolve(ROOTDIR, './node_modules')
      }
    ]
  },
};
