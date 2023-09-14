import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                            localIdentName: isDev ?
                                '[path][name]__[local]--[hash:base64:5]' :
                                '[hash:base64:8]'
                        }
                    }
                },
                "sass-loader",
            ],
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ]
}