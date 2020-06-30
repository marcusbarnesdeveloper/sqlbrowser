const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./client/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "script.js"
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader'
      }
    ]
  }
}