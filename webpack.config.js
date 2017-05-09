var path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, 'app/react/index.js.jsx'),
  output: {
    filename: 'build.js',
    path:     path.resolve(__dirname, 'app/assets/javascripts')
  },
  module: {
    loaders: [
      {
        test:    /\.es6$|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use:     {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
