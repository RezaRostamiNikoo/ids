const path = require('path')


/** @type {import("webpack").Configuration} */
module.export = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts?/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "umd",
            name: {
                amd: "ids",
                commonjs: "ids",
                root: "ids"
            },

        },
        globalObject: "globalThis"
    }
}