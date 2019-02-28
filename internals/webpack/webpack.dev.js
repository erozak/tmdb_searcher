const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const { fromApp, fromRoot } = require('../utils/path');
const baseConfig = require('./webpack.base');

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  inject: true,
  template: fromApp('index.html'),
});

const circularDependencyPlugin = new CircularDependencyPlugin({
  exclude: /a\.js|node_modules/,
  failOnError: false,
});

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: fromRoot('build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    htmlWebpackPlugin,
    circularDependencyPlugin,
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: fromApp(),
    watchContentBase: true,
    inline: true,
    port: 8080,
  }
});
