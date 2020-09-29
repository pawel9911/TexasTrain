const path = require("path");
const entryFile = "app.js";

module.exports = {
  entry: `./js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `/`),
    publicPath: "/build/",
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      
    ]
  }
};