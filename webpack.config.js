const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './JS/main.js', 
  output: {
    filename: 'js/bundle.js', 
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './HTML/Index.html',
      filename: 'Index.html',
    }),
    new HtmlWebpackPlugin({
      template: './HTML/Cadastro.html',
      filename: 'Cadastro.html',
    }),
    new HtmlWebpackPlugin({
      template: './HTML/projetos.html',
      filename: 'projetos.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/, 
        type: 'javascript/esm', 
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, 
        type: 'asset/resource',
        generator: {
          filename: 'imagens/[name][ext]', 
        },
      },
    ],
  },
};