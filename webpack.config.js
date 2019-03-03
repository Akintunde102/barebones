// webpack v4
const { join, resolve } = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
// const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const WebpackMd5Hash = require( 'webpack-md5-hash' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const autoprefixer = require( 'autoprefixer' );

const devMode = process.env.npm_lifecycle_event !== 'build';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        localIdentName: '[local]_[hash:base64:5]',
        sourceMap: true,
        url: false
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
            } )
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
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            },
            {
                test: /\.(sa|le|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    CSSModuleLoader,
                    postCSSLoader,
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
