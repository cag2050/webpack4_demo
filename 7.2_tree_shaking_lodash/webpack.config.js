const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "none",
    optimization: {
        // 让 webpack 用 UglifyjsWebpackPlugin 去压缩代码；production 模式下，默认为 true；
        minimize: true,
        // 允许你提供一个或多个定制的 UglifyjsWebpackPlugin 实例，来覆盖默认的 minimizer。
        minimizer: [
            // new UglifyJsPlugin()
        ],
        usedExports: true,
        sideEffects: true
    },
    plugins: []
}
