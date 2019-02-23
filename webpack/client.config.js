const { resolve } = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ROOTDIR = resolve(__dirname, '../');
const SRCDIR = resolve(ROOTDIR, './src/client');
const DSTDIR = resolve(ROOTDIR, './dist/public');

module.exports = {
  name: 'client',
  entry: [
    resolve(SRCDIR, './js/app.ts'),
    resolve(SRCDIR, './css/app.scss'),
  ],
  output: {
    path: DSTDIR,
    filename: './assets/js/app.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: resolve(SRCDIR, './index.html'),
      inject: 'head'
    }),
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-hot-loader/babel']
            }
          },
          'ts-loader'
        ],
        exclude: resolve(ROOTDIR, './node_modules')
      },
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: require('node-sass-glob-importer')()
            }
          }
        ]
      }
    ]
  },
};
