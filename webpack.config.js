// const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const FaviconswebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlwebpackPluginConfig = new HtmlwebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const FaviconswebpackPluginConfig = new FaviconswebpackPlugin({
  logo: './assets/images/favicon.png',
  prefix: 'icons-[hash]/',
  emitStats: false,
  statsFilename: 'iconstats-[hash].json',
  persistentCache: true,
  inject: true,
});

const ProvidePluginConfig = new webpack.ProvidePlugin({
  'React': 'react',
})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        include: `${__dirname}/src`,
        exclude: / bundle\.js$|node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: [
              'react',
              ['es2015', { loose: true, modules: false }],
              'stage-3',
            ],
          },
        }],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      }, {
        test: /\.sass$|\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: `${__dirname}/dist`,
        }),
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
    ],
  },
  context: __dirname,
  devServer: {
    inline: true,
    contentBase: `${__dirname}/assets`,
    port: 3000,
  },
  plugins: [
    ProvidePluginConfig,
    HtmlwebpackPluginConfig,
    FaviconswebpackPluginConfig,
    new ExtractTextPlugin('main.css'),
  ],
};
