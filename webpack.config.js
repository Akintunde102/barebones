// webpack v4
const { join, resolve } = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const WebpackMd5Hash = require( 'webpack-md5-hash' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );
const postPresetEnv = require( 'postcss-preset-env' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const devMode = process.env.npm_lifecycle_event !== 'build';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        localIdentName: '[local]_[hash:base64:5]',
        sourceMap: true,
        url: true,
        importLoaders: 1
    }
};

const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
            autoprefixer( {
                browsers: [ '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9' ]
            } ),
            postPresetEnv()
        ]
    }
};

module.exports = env => ( {
    entry: join( __dirname, 'src', 'index.jsx' ),
    output: {
        filename: 'bundle.js',
        path: resolve( __dirname, 'dist' )
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8
                        }
                    }
                ]
            },
            {
                test: /\.woff$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'
            },
            {
                test: /\.eot$/,
                use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                use: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                } )

            },
            {
                test: /\.(sa|le|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader,
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    /**
                    {
                        loader: 'less-loader',
                        options: {
                            includePaths: [ resolve( '../node_modules' ) ]
                        }
                    }**/
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin( 'dist', {} ),
        /** *
        new CopyPlugin( [
            {
                from: 'src/assets/fonts',
                to: 'fonts'
            } ] ),
        */
        new MiniCssExtractPlugin( {
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        } ),
        new HtmlWebpackPlugin( {
            inject: true,
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/assets/images/core-img/favicon.ico'
        } ),
        new WebpackMd5Hash()
    ],
    devServer: {
        host: 'localhost'
    },
    devtool: 'sourcemap',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.less', 'sass' ],
        alias: {
            // '../../theme.config$': join( __dirname, 'my-semantic-theme/theme.config' )
        }
    }
} );
