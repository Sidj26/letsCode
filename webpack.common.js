
module.exports = {
  entry: {
    app: "./html/index.js",
    radio: "./html/radio/index.js",
    checkbox: "./html/checkbox/index.js",
    button_group: "./html/button_group/index.js",
    button_group_2: "./html/button_group_2/index.js",
    switch: "./html/switch/index.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};