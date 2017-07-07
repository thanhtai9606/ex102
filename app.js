var http = require('http')
var express = require('express')
var video = require('./routes/video')
var path = require('path')

// var favicon = require('serve-favicon')
// var logger = require('morgan')
// var methodOverride = require('method-override')
// var session = require('express-session')
// var bodyParser = require('body-parser')
// var multer = require('multer')
//var errorHandler = require('errorhandler')

var app = express()

// all environments
app.set('port', process.env.PORT || 4300)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', video);

// error handling middleware should be loaded after the loading the routes
// if (app.get('env') === 'development') {
//   app.use(errorHandler())
// }

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})