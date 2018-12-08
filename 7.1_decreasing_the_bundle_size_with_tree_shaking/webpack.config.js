module.exports = {
    // tree shaking 起作用的3个要求：1. babel中设置modules:false；2. 添加 UglifyJsPlugin 插件；3. 打开优化项：optimization.usedExports。
    // mode: "production"模式下，1. 已经默认添加了 UglifyJsPlugin 插件；2. 已经默认打开了优化项：optimization.usedExports
    mode: 'production',
    optimization: {
        // production模式下，默认引入
        // usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}
