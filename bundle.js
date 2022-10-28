import webpack from "webpack";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";

const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname))).slice(3);

console.log(path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname))), __dirname);

webpack({
    mode: 'production',
    entry: path.join(__dirname, './rewrite/index.js'),
    output: {
        path: __dirname,
        filename: './lib/uv.bundle.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        })],
    },
}, (err, i) =>
    console.log(!err ? 'Ultraviolet bundled!' : e)
);