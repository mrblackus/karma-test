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
  devtool: 'source-map',
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['es2015']
    }
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'isparta'
      }
    ],
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
