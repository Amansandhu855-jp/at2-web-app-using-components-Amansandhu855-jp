const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { homepage } = require("./package.json");

const homepagePath = homepage ? new URL(homepage).pathname : "/";

module.exports = (_, argv = {}) => {
  const isProd = argv.mode === "production";
  const publicUrl = process.env.PUBLIC_URL ?? (isProd ? homepagePath : "/");

  return {
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash].js", // better caching
      path: path.resolve(__dirname, "dist"),
      clean: true, // clean dist on build
      publicPath: publicUrl, // critical for GH Pages
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: "babel-loader" },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
  };
};
