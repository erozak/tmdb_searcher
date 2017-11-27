const utils = require('./utils');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlwebpackPluginConfig = new HtmlwebpackPlugin({
  template: utils.resolve('src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: utils.resolve('src/index.js'),
  output: {
    path: utils.resolve('dist'),
    filename: 'js/bundle-[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': utils.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        include: utils.resolve('src'),
        exclude: [
          utils.resolve('dist'),
          utils.resolve('node_modules'),
        ],
        enforce: 'pre',
        loader: 'eslint-loader',
      }, {
        test: /\.js$/,
        exclude: [
          utils.resolve('node_modules'),
        ],
        use: [{
          loader: 'babel-loader',
          query: {
            presets: [
              'react',
              'env',
            ],
          },
        }],
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      }, {
        test: /\.(sass|scss)$/,
        exclude: [
          utils.resolve('node_modules'),
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: utils.resolve('dist/styles'),
        }),
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  context: __dirname,
  plugins: [
    HtmlwebpackPluginConfig,
    new ExtractTextPlugin('styles/[hash].css'),
  ],
};
