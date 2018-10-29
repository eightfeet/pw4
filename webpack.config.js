const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    // 环境
    const isUat = argv.isuat === 'true' ? true : false;
    const isPro = !isUat && argv.mode === 'production';
    const isDev = argv.mode === 'development';
    const isCdn = false;
    const cdn = 'cdnPath';

    return {
        context: path.resolve(__dirname, 'src'),
        entry: ['./core/polyfill.js', './index.js'],
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: isCdn ? `${cdnPath}/` : "./",
            filename: "bundle.js"
        },
        resolve: {
            extensions: [".jsx", ".js", ".json", ".less", ".scss", ".css"],
            modules: [
                path.resolve(__dirname, "src/lib"),
                path.resolve(__dirname, "node_modules"),
                "node_modules"
            ],
            alias: {
                components: path.resolve(__dirname, "src/components"), // used for tests
                style: path.resolve(__dirname, "src/style"),
                core: path.resolve(__dirname, "src/core"),
                "~": path.resolve(__dirname, "src"), // root
                react: "preact-compat",
                "react-dom": "preact-compat"
            }
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    exclude: path.resolve(__dirname, "src"),
                    enforce: "pre",
                    use: "source-map-loader"
                },
                {
                    test: /\.(jsx|js)?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                      !isPro ? 'style-loader' : MiniCssExtractPlugin.loader,
                      'css-loader',
                      'postcss-loader',
                      'sass-loader',
                    ],
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    type: 'javascript/auto'
                },
                {
                    test: /\.(xml|html|txt|md)$/,
                    use: "raw-loader"
                },
                {
                    test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
                    use: isPro ? "file-loader" : "url-loader"
                },
                {
                    test: /\.(jpe?g|png|gif)$/,
                    use:
                        isPro
                            ? {
                                loader: "url-loader?limit=10000"
                              }
                            : {
                                loader: "url-loader"
                              }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: isPro ? '[name].css' : '[name].[hash].css',
                chunkFilename: isPro ? '[id].css' : '[id].[hash].css',
            })
        ],
        devServer: {
            port: process.env.PORT || 8080,
            host: "localhost", // host: '0.0.0.0',
            publicPath: "/",
            contentBase: "./src",
            historyApiFallback: true,
            open: true,
            // openPage: '',
            proxy: {
            }
        }
    };
}