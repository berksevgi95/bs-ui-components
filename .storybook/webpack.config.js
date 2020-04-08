var webpack = require("webpack");
var path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ]
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  config.resolve.extensions.push(".ts", ".tsx");

  config.plugins.push(new webpack.HotModuleReplacementPlugin())

  return config;
};
