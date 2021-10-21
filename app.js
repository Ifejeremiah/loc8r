const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./app_api/models/db');

// const indexRouter = require('./app_server/routes');
const apiRouter = require('./app_api/routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Resourses
app.use(express.static(path.join(__dirname, 'public')));
//Using Angular as Frontend
app.use(express.static(path.join(__dirname, 'app_public', 'build')));

// Allowing CORS requests
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
// app.use('/', indexRouter);
app.use('/api', apiRouter);
app.get(/(\/about) | (\/location\/[a-z0-9]{24})/, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'app_public', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).render('error-404', {
    title: 'Loc8r - Page Not Found',
    status: "404 - Page Not Found"
  });
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