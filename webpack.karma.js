var baseConfig = require('./webpack.config.js')[0];

baseConfig.output.filename = 'lib.karma.js';

baseConfig.isparta = {
  embedSource: true,
  noAutoWrap: true,
  babel: {
    presets: ['es2015']
  }
};

baseConfig.module.preLoaders = [
  {
    test: /\.js$/,
    exclude: [
      /node_modules/
    ],
    loader: 'isparta'
  }
];

module.exports = baseConfig;
