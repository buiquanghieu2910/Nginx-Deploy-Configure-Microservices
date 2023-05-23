const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/admin/'
  //   : '/',
  // configureWebpack: {
  //   entry: "./src/main.js",
  //   devServer: {
  //     hot: true,
  //     allowedHosts: "all"
  //   },
  //   watch: true,
  //   watchOptions: {
  //     ignored: /node_modules/,
  //     poll: 1000,
  //   },
  // }
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  devServer: {
    hot: true,
    allowedHosts: "all"
  },
})
