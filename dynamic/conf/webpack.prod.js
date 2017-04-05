const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
module.exports = function () {
  return webpackMerge(commonConfig(), {
    output: {
      filename: '[name].[chunkhash].bundle.js'
    },
    plugins: [
      new UglifyJsPlugin({
        beautify: false, //prod
        sourceMap: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        }, //prod
        compress: {
          screw_ie8: true,
          warnings: true
        }, //prod
        comments: false //prod
      })
    ]
  })
};
