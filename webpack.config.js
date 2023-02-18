const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'library', // ?!
    libraryTarget: 'umd',
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ extractComments: false })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
}