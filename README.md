#### webpack 4 教程
* 参考：https://segmentfault.com/u/thanksforhappy/articles
* 英文原版：https://wanago.io/2018/07/16/webpack-4-course-part-one-entry-output-and-es6-modules/

* 说明：
每个文件夹，是一个npm项目，都需要运行`npm install`安装需要的node模块。

* webpack 的 mode 分别为 development、production、none 时，默认配置文件：webpack.default.config.development.js、webpack.default.config.production.js、webpack.default.config.none.js。

* vue-cli v3 中，webpack 在开发环境和生产环境下的配置文件：vue.cli.3.webpack.config.development.js、vue.cli.3.webpack.config.production.js。

### style-loader、css-loader、mini-css-extract-plugin 区别
项目 | 区别
--- | ---
css-loader | 处理 css 文件
style-loader | 把 js 中 import 导入的样式文件代码，打包到 js 文件中，运行 js 文件时，将样式自动插入到`<style>`标签中
mini-css-extract-plugin | 把 js 中 import 导入的样式文件代码，打包成一个实际的 css 文件，结合 html-webpack-plugin，在 dist/index.html 中以 link 插入 css 文件；默认将 js 中 import 的多个 css 文件，打包时合成一个

### url-loader、file-loader 区别？
1. url-loader是对file-loader的一个封装，比如webpack中对图片的加载器配置
```
{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
```
这样在小于8K的图片将直接以base64的形式内联在代码中，可以减少一次http请求。

2. 如果文件大小大于限制，将转为使用 file-loader，所有的查询参数也会透传过去。

### loader、plugin 区别？
1. loader 用于加载某些资源文件。
因为 webpack 只能理解 JavaScript 和 JSON 文件，对于其他资源例如 css，图片，或者其他的语法集，比如 jsx， coffee，是没有办法加载的。 这就需要对应的loader将资源转化，加载进来。从字面意思也能看出，loader是用于加载的，它作用于一个个文件上。
2. plugin 用于扩展webpack的功能。
它直接作用于 webpack，扩展了它的功能。当然loader也是变相的扩展了 webpack ，但是它只专注于转化文件（transform）这一个领域。而plugin的功能更加的丰富，而不仅局限于资源的加载。

### webpack 打包产生的文件名中，hash、chunkhash、contenthash 的区别
hash 类型 | 区别
--- | ---
hash | 每一次打包都会生成一个唯一的 hash
chunkhash | 根据每个 chunk 的内容来生成；<br/>chunk打包时，output.filename、output.chunkFilename 推荐使用 chunkhash。
contenthash | 根据提取文件的内容生成的 hash；<br/>在使用 ExtractTextWebpackPlugin（webpack 3.x）或MiniCssExtractPlugin（webpack 4.x）时，使用 contenthash 提取出css部分代码到单独的css文件(比如：vue单文件组件中的style部分）
