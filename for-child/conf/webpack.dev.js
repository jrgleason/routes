const webpack = require("webpack");
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
module.exports = function () {
  return webpackMerge(commonConfig(), {
    // module: {
    //  rules: [
    //    {
    //      enforce: "pre",
    //      test: /\.ts$/,
    //      use: ["tslint-loader"]
    //    }
    //  ]
    // },
    devtool: 'inline-source-map',
  })
};
