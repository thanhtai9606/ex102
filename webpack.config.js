var path = require("path");
module.exports =
{
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
}

// writes to disk: ./build/app.js, ./build/search.js