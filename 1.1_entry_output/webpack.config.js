module.exports = {
    // 默认值
    // 下面2个entry是等价的
    // entry: './src/index.js',
    entry: {
        // 意思是：build后文件名是main
        main: './src/index.js'
    },
    /*
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
    */
};
