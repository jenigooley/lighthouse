var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var yml = require('node-yaml');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/js/index')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  devServer: {
    port: process.env.PORT || 8080
  },
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'dist'),
  },
  module: {
    loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
               presets: ['react']
             }
         },
         {
             test: /\.css$/,
             loaders: [
                 'style-loader',
                 'css-loader?importLoaders=1',
                 'postcss-loader',
             ]
         }
     ]
 },
  stats: 'normal'
}
