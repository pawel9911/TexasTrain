const path = require("path");
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const MiniCSS = require("mini-css-extract-plugin");
const Compression = require("compression-webpack-plugin");

const entryFile = "app.js";
module.exports = {
  entry: `./js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `./build`)
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/img/",
          outputPath: "/img/"
        }
      }
    ]
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: `./index.html`
    }),
    new Compression({
      threshold: 0,
      minRatio: 0.8
    })
  ]
};