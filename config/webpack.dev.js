const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development'),
});

module.exports = merge(baseConfig, {
  plugins: [
    DefinePluginConfig,
  ],
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: utils.resolve('dist'),
    port: 8080,
  },
});
