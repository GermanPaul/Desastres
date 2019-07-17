module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public/js',
    // filename: 'bundle_alertas.js'
    filename: 'bundle_reporte.js'
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
