* 运行命令`npm run build`之后，打开index.html可看到效果（index.html引入了打包后的js文件，js文件将样式插入到html的head部分，插入功能是style-loader做的）

* webpack 配置了 babel-loader 后，Babel配置文件的查找行为：
```
Babel will look for a .babelrc in the current directory of the file being transpiled.
If one does not exist, it will travel up the directory tree until it finds either a .babelrc,
or a package.json with a "babel": {} hash within.
```
因此，webpack中，babel 配置项信息options可以配置在3个地方：
1. webpack.config.js 中；
2. .babelrc 中；
3. package.json 文件中；
