const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { isBundle } = require("typescript");

module.exports = {
  entry: path("__dirname", "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  oninput: {
    path: path.resolve("__dirname", "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugin: [
    new htmlWebpackPlugin({
      template: ("__dirname", "..", "./src/index.html"),
    }),
  ],
};
