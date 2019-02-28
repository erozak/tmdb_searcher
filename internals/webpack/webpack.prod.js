const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');

const { fromApp, fromRoot } = require('../utils/path');

const baseConfig = require('./webpack.base');

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  filename: '../index.html',
  template: fromApp('index.html'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
  inject: true,
});

const hashedModuleIdsPlugin = new HashedModuleIdsPlugin({
  hashFunction: 'sha256',
  hashDigest: 'hex',
  hashDigestLength: 20,
});

const terserPlugin = new TerserPlugin({
  terserOptions: {
    warnings: false,
    compress: {
      comparisons: false,
    },
    mangle: true,
    output: {
      comments: false,
      ascii_only: true,
    },
  },
  parallel: true,
  cache: true,
  sourceMap: true,
});

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: fromRoot('build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    htmlWebpackPlugin,
    hashedModuleIdsPlugin,
  ],
  performance: {
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
  optimization: {
    minimize: true,
    minimizer: [terserPlugin],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        main: {
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
});
