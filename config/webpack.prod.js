const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FaviconswebpackPlugin = require('favicons-webpack-plugin');
const baseConfig = require('./webpack.base');

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const UglifyPluginConfig = new UglifyJSPlugin({
  sourceMap: true,
});

const FaviconswebpackPluginConfig = new FaviconswebpackPlugin({
  logo: utils.resolve('assets/img/favicon.png'),
  prefix: 'icons-[hash]/',
  emitStats: false,
  statsFilename: 'iconstats-[hash].json',
  persistentCache: true,
  inject: true,
});

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    UglifyPluginConfig,
    FaviconswebpackPluginConfig,
    DefinePluginConfig,
  ],
});
