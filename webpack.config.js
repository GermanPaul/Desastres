module.exports = {
  entry: {
    alertas: './src/app/alertas/index',
    reportes: './src/app/reportes/index'
  },
  output: {
    path: __dirname + '/src/public/js',
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
