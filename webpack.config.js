const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  plugins: [    
    new ExtractTextPlugin('styles.css')
  ],
  
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath:'/',
    compress: true,
    historyApiFallback: true,
    port: 8080
  },

  devtool:"source-map",
};