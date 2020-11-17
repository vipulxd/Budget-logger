//entry point in te src folder the app.js 
// the output 
const path = require('path');

module.exports = {
   
   entry: './src/app.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',


   },

   //loader for jsx or babel
   module: {
      rules: [{
         loader: 'babel-loader',
         //load only those file that ends with .js format
         test: /\.js$/,
         //exclude a folder
         exclude: /node_modules/
      }, {/* this is the loaader for scss file */
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {

      contentBase: path.join(__dirname, 'public'),
      /*this will make the index.html as the default  so that only the index.html loads
      on the web */
      historyApiFallback: true,

   }

};
