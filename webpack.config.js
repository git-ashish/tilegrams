var path = require('path')
var webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    javascript: './index.js',
    html: './index.html',
    html2: './us-congressional-districts-2018.html'
  },
  output: {
    filename: 'main.js',
    path: 'dist',
  },
  devServer: {
    disableHostCheck: true,
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ["eslint-loader"],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        type: 'javascript/auto',
        test: /tilegrams\/us-individual-states-congressional-districts\/[^.]*\.json$/,
        loader: 'file-loader?name=tilegrams/us-individual-states-congressional-districts/[name].[ext]'
      },
      {
        test: /\.csv$/,
        loaders: ['raw'],
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml&name=[name].[ext]'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=[name].[ext]"}
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './tilegrams/us-individual-states-congressional-districts/**',
        to: './'
      }
    ])
  ]
}
