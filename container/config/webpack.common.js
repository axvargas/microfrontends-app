const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', 
                {
                  runtime: 'automatic',
                }
              ], 
              ['@babel/preset-env',
                // {
                //   core
                // }
              ]
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        },
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}