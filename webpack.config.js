const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
   // mode 
   mode: 'production', // development 
   // entry 
   entry: {
      main: path.resolve(__dirname, 'src/javascript/main.js'),
      about: path.resolve(__dirname, 'src/javascript/about.js')
   },
   // output
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name][contenthash].js',
      clean: true
   },
   // devServer
   devServer: {
      static: {
         directory: path.resolve(__dirname, 'public')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true
   },
   // loaders
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
      ],
   },
   // plugins
   plugins: [
      new HtmlWebpackPlugin({
         title: "Countries | Home",
         template: './src/indexTemp.html',
         filename: 'index.html',
         chunks: ['main']
      }),

      new HtmlWebpackPlugin({
         title: "Countries | About",
         template: './src/pages/aboutTemp.html',
         filename: 'about.html',
         chunks: ['about']
      }),
      new MiniCssExtractPlugin()
   ]
}