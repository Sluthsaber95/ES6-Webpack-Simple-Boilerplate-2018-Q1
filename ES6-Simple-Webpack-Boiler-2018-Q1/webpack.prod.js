const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

// module: {
//   rules: [{
//     test: /\.css$/,
//     use: ["style-loader", "css-loader"]
//     // use: ExtractTextPlugin.extract({
//     //   fallback: "style-loader",
//     //   use: "css-loader"
//     // })
//   }]
// },

// new ExtractTextPlugin("styles.css"),
