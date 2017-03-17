var webpack = require("webpack");
var glob = require('glob-all');
const helpers = require('./helpers');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function(){
  return {
    context: helpers.root(''),
    entry: {
      app: './src/main',
      styles: './src/app-global'
    },
    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx',
        '.pug',
        '.styl',
        '.less',
        '.css',
        '.html',
        '.json'
      ],
    },
    output: {
      filename: "[name].js",
      path: path.join(helpers.root(""), "dist")
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: ["apply-loader", "pug-loader"]
        },
        {
          test: /\.ts$/,
          exclude: [/spec\.ts$/],
          use: ['ts-loader']
        },
        {
          test: /\.tsx$/,
          exclude: [/spec\.ts$/],
          use: ['ts-loader']
        },
        {
          test: /\.html$/,
          use: ["html-loader?interpolate=require&-minimize"]
        },
        {
          test: /\.styl$/,
          exclude: [/global\.styl$/],
          use: ["to-string-loader", "css-loader", "stylus-loader"]
        },
        {
          test: /global\.styl$/,
          use: ["style-loader","css-loader","stylus-loader"]
        },
        {
          test: /\.less$/,
          exclude: [/global\.less$/],
          use: ["to-string-loader", "css-loader", "less-loader"]
        },
        {
          test: /global\.less$/,
          use: ["style-loader","css-loader","less-loader"]
        },
        {
          test: /\.css$/,
          exclude: [/global\.css$/],
          use: ["to-string-loader", "css-loader"]
        },
        {
          test: /global\.css$/,
          use: ["style-loader","css-loader"]
        },
        // I have to add the regex .*? because some of the files are named like... fontello.woff2?952370
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
          use: [{loader:'url-loader', options:{limit:900000}}]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        excludeChunks: ["upgrade"]
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      //TODO: Fix this per "LoaderOptionsPlugin context" https://webpack.js.org/guides/migrating/
      new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname
          }
      })
    ]
  }
};
