// //entry point in te src folder the app.js 
// // the output 
// const ExtractTextPlugin= require('extract-text-webpack-plugin');

// const path = require('path');
// module.exports=(env)=>{
//    const isProduction= env=== 'production';
//    const CSSExtract = new ExtractTextPlugin('styles.css');
//    return {
//    entry: './src/app.js',
//    output: {
//       path: path.join(__dirname, 'public'),
//       filename: 'bundle.js',


//    },

//    //loader for jsx or babel
//    module: {
//       rules: [{
//          loader: 'babel-loader',
//          //load only those file that ends with .js format
//          test: /\.js$/,
//          //exclude a folder
//          exclude: /node_modules/
//       }, {/* this is the loaader for scss file */
//          test: /\.s?css$/,
//          use: CSSExtract.extract({
//          use:[
// 'css-loader',
// 'sass-loader'
//          ]
//        }) }]
//    },
//    plugins:[
//       CSSExtract
//    ],
//    devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map',
//    devServer: {

//       contentBase: path.join(__dirname, 'public'),
//       /*this will make the index.html as the default  so that only the index.html loads
//       on the web */
//       historyApiFallback: true,

//    }

// };
// }

   

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
