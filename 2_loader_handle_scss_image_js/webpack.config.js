module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 让我们能在javascript代码中导入css文件，但这还不能让css起作用。我们还需要 style-loader 把这些样式代码加载到浏览器中（注：就是将样式自动插入到<style>标签中）
                // 加载器链是从右往左执行的（注：即首先css-loader处理，然后把处理后结果给到style-loader再去处理）
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 确定文件大小的上限（以字节为单位），当文件尺寸超过这个上限后，就不把它们转为base64 URI
                            limit: 10000,
                            // 遇到图片地址错误导致图片引用不到的情况，解决：在配置项内加入 publicPath 属性，设置部署时的绝对路径
                            // 此处配置说明：https://www.jianshu.com/p/3429cd456982
                            publicPath: "dist/"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
console.log(module.exports.module.rules[3].use);
