const webpack = require('webpack');

const config = {
  entry: './scripts/react-root.js',
  output: {
    filename: '../../assets/theme.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    //resolve .js & .jsx extensions
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config;