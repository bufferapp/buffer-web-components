const PostCSSImport = require('postcss-import');
const PostCSSCustomProperties = require('postcss-custom-properties');
const PostCSShexrgba = require('postcss-hexrgba');

const classNameFormat = '[name]_[local]_[hash:base64:5]';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          `css-loader?modules&importLoaders=1&localIdentName=${classNameFormat}`,
          'postcss-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/components)/,
        loader: 'babel-loader',
        presets: ['es2015', 'stage-0', 'react'],
        plugins: [
          'transform-object-assign',
          'add-module-exports',
        ],
      },
    ],
  },
  postcss: [
    PostCSSImport,
    PostCSSCustomProperties,
    PostCSShexrgba,
  ],
};
