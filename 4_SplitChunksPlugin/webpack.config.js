module.exports = {
    entry: {
        a: "./src/a.js",
        b: "./src/b.js"
    },
    output: {
        filename: "[name].[chunkhash].bundle.js",
        path: __dirname + "/dist"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            // 注意：此处 utilities/users.js 能被提取出来，必须同时满足以下2个条件：1.文件大小要大于 minSize 配置值；2.模块被重复引用的次数大于等于 minChunks 配置值。
            // SplitChunksPlugin 插件默认只分割超过30kb（注意这个体积是压缩之前的）的文件；
            // 因为我们的 utilities/users.js 文件大小是小于30kb，如果没有修改minSize属性的话，它就不会分割成一个单独的文件。在真实情形下，这是合理的，因为（如分割）并不能带来性能真正的提升，反而使得浏览器多了一次对utilities/users.js的请求，而这个utilities/users.js又是如此之小（不划算）。
            minSize: 0,
            // splitChunks 默认有一个cacheGroups的配置项
            /*
            cacheGroups: {
                // vendors 这一项指明了包括来自node_modules目录中的文件。
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // 模块的优先级，默认的优先级值是0
                    priority: -10
                },
                // default 这一项表示默认的缓存组，包含其它共享模块（此处是 utilities/users.js）。
                // 如果用户新建一个缓存组cacheGroup，会覆盖default缓存组；因为新建缓存组默认的优先级值是0, 高于default缓存组的优先级-20。
                default: {
                    // 只有当模块被重复引用的次数大于等于该数字时，这个模块才会被提取出来。
                    minChunks: 2,
                    // default 的默认优先级是 -20；手动添加的优先级是0，大于默认优先级
                    priority: -20,
                    // 是否重用 chunk；如果当前块包含已经从主bundle中分离出来的模块，那么它将用已经分离出来的模块，而不是生成一个新的模块，需要在精确匹配到对应模块时候才会生效；一般设置为 true
                    reuseExistingChunk: true
                }
            }
            */
        }
    }
};
