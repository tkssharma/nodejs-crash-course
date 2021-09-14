var express = require('express');
// 1. get the express
var path = require('path');
var favicon = require('serve-favicon');

// Logging 
var logger = require('morgan');

// client side we send cookies so this module will help us to extract cookies 
var cookieParser = require('cookie-parser');

// import body parser to use in application 
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var cat = require('./routes/cat');
const courses = require('./routes/courses');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/cat', cat);
app.use('/courses', courses);
// users --> users  route handler
//  / index route handler 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
