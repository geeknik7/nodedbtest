var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config({
  path: path.join(__dirname, './config/') + '.' + process.env.NODE_ENV + '.env',
});
const {port} = require('./config/config');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const es6Routers = require('./routes/es6')
const MODELS = require('./models')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const users = require('./routes/users/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users1', usersRouter);
app.use('/es6', es6Routers)
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//let port = 3000;
// app.listen(port, () => {
//    console.log(`Example app listening at http://localhost:${port}`)
// })

MODELS.sequelize.sync().then(result => {
  // console.log(result);
  app.listen(port);
  console.log('port listening', {port});
}).catch(err => {
  console.log(err);
});


module.exports = app;
