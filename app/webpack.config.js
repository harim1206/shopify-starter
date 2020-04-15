const webpack = require('webpack');

const config = {
  entry: './app.js',
  output: {
    filename: '../../assets/theme.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}

module.exports = config;