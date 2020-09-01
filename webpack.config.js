const path = require('path')

module.exports = {
  mode: 'development', // "development" (not minified)
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.bundle.js', // default main.js
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}
