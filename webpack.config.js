var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var baseConfig = {
  name: 'base',
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: "lib.js",
    path: __dirname + "/build/",
    library: 'KarmaTest',
    libraryTarget: 'umd'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [
        /node_modules/
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = [
  baseConfig
];
