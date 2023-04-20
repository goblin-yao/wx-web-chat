// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    proxy: {
      "/web/*": {
        // /api 表示拦截以/api开头的请求路径
        target: "http://127.0.0.1:80", // 跨域的域名
        changeOrigin: true, // 是否开启跨域
      },
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
