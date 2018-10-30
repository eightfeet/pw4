const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

    // 环境
    const isUat = argv.isuat === 'true' ? true : false;
    const isPro = !isUat && argv.mode === 'production';
    const isDev = argv.mode === 'development';
    const cdn = null;

    return {
        context: path.resolve(__dirname, 'src'),
        entry: ['./core/polyfill.js', './index.js'],
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: cdn ? `${cdn}/` : "./",
            filename: isPro ? 'bundle.[hash:6].js' : 'bundle.js'
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
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: !isPro ? '[name].css' : '[name].[hash:6].css',
                chunkFilename: !isPro ? '[id].css' : '[id].[hash:6].css',
            }),
            new webpack.DefinePlugin({
                __UAT__: isUat,
                __PRO__: isPro,
                __PUBLICKPATH__: JSON.stringify(cdn ? `${cdn}/` : "./")
            }),
            new OptimizeCssAssetsPlugin({
                // css压缩
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                  preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            }),
            new CopyWebpackPlugin([
                { from: "./manifest.json", to: "./" },
                { from: "./favicon.ico", to: "./" },
                { from: "./assets", to: "./assets" }
            ])
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