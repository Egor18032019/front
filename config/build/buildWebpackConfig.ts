import {BuildOptions} from "./types/config";
import webpack from "webpack";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev, port} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            //лоадеры
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(paths.html)

    }
}