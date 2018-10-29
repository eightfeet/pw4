const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    // 环境
    const isUat = argv.isuat === 'true' ? true : false;
    const isPro = !isUat && argv.mode === 'production';
    const isDev = argv.mode === 'development';
    const isCdn = false;

    return {
        entry: './src/index.js',
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist')
        },
        plugins: [new HtmlWebpackPlugin()]
    };
}