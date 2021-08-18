module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: { host: '0.0.0.0', hot: true, disableHostCheck: true, },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['postcss-loader']
        }
      ]
    }
  }
}
