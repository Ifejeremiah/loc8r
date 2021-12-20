require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
require('./app_api/models/db');
require('./app_api/config/passport');

// Routes
const indexRouter = require('./app_server/routes');
const apiRouter = require('./app_api/routes');

// Initialize express framework
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

// Initialize passport and add as middleware
app.use(passport.initialize());

// Allowing CORS requests
app.use('/api', (req, res, next) => {
  if (req.app.get('env') === 'development') {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  }
});

// Routes Middle wares
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.get(/(\/about)|(\/location\/[a-z0-9]{24})/, (req, res, next) => {
  res.sendFile(path.join(__dirname, 'app_public', 'build', 'index.html'));
});

// Error handlers
// Authentication rejection (401 - UnauthorizedError)
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: ` ${err.name} : ${err.message}` });
  }
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