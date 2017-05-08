var Merge        = require('webpack-merge');
var webpack      = require('webpack');
var CommonConfig = require('./webpack.config.js');

module.exports = function () {
  return Merge(
    CommonConfig,
    {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
    }
  );
};
