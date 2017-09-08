const webpack = require('webpack');
const path = require('path');
const srcPath = path.resolve('./src');
const distPath = path.resolve('./dist');

const config = {
  entry: {
    'index': `${srcPath}/index.ts`
  },
  output: {
    path: distPath,
    filename: '[name].js',
    sourceMapFilename: '[file].map.json'
  },
  devServer: {
    contentBase: distPath
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      path.resolve(srcPath),
      'node_modules'
    ]
  },

  devtool: 'source-map'
};

module.exports = config;
