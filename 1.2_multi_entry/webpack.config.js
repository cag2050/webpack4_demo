module.exports = {
    entry: {
        index1: './src/index1.js',
        index2: './src/index2.js',
    },
    output: {
        // 默认path，可注释
        // path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    }
};
