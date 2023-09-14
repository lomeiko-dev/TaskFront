import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (path: string, isDev: boolean): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: path
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ]
}