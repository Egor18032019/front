import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, {WebpackPluginInstance} from "webpack";

export default function buildPlugins(html: string): WebpackPluginInstance[] {

    return [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin(),
    ]
}