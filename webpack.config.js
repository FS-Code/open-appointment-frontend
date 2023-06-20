const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = (env, args) => {
    return {
        entry: './src/index.tsx',
        output: {
            filename: args.mode === 'development' ? 'app.bundle.js' : 'main.js',
            path: path.resolve('build/assets'),
            publicPath: 'https://localhost:3000/assets/',
            clean: true,
            crossOriginLoading: 'anonymous',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.(jsx?|tsx?)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-react',
                                    { runtime: 'automatic' }
                                ],
                                '@babel/preset-typescript',
                            ],
                            plugins: [
                                ...(args.mode === 'development' ? [
                                    require.resolve('react-refresh/babel')
                                ] : [])
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true, // Enable CSS modules if needed
                            },
                        },
                    ],
                },
            ]
        },
        devServer: {
            port: 3000,
            devMiddleware: {
                index: false,
            },
            hot: true,
            allowedHosts: 'all',
            historyApiFallback: true,
            server: 'https',
            client: {
                webSocketURL: 'wss://localhost:3000/ws',
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        },

        plugins: [
            ...(args.mode === 'development' ? [
                new ReactRefreshWebpackPlugin()
            ] : [])
        ],
    }
}