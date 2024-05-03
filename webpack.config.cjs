const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  target: "node",
  output: {
    module: true,
    path: __dirname + "/build",
    filename: "index.js",
    clean: true,
    libraryTarget: "module",
    chunkFormat: "module",
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  externals: ["react", "openai", "react-chatbot-kit", nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?|\.jsx?|\.js?|\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: "url-loader",
      },
    ],
  },
};
