const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  output: {
    publicPath: "/",
    path: __dirname + "/build",
    filename: "index.js",
    library: "openreactbot",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?|\.jsx?|\.js?|\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: "file-loader",
        exclude: /node_modules/,
        options: {
          outputPath: "assets",
        },
      },
    ],
  },
  externals: ["react", "openai", "react-chatbot-kit", nodeExternals()],
};
