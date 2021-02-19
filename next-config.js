module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "isomorphic-style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[hash:base64:5]_[name]_[local]",
          },
        },
        "postcss-loader",
      ],
    });

    return config;
  },
};
