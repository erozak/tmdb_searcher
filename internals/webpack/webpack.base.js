const { DefinePlugin } = require('webpack');
const bytes = require('bytes');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const { fromApp, fromRoot } = require('../utils/path');

const definePlugin = new DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

const faviconsWebpackPlugin = new FaviconsWebpackPlugin({
  logo: fromRoot('public/favicon.png'),
  title: 'dev_erozakrocwols',
  persistentCache: true,
  inject: true,
});

const baseConfig = {
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    fromApp('app.tsx'),
  ],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: bytes('10kb'),
              noquotes: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    definePlugin,
    faviconsWebpackPlugin,
  ]
};

module.exports = baseConfig;
