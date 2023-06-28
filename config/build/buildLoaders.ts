import webpack from "webpack";

export default function buildLoaders(): webpack.RuleSetRule[] {
    // порядок лоадеров имеет значение !
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [tsLoader]
}