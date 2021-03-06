var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongooseDB = require('mongoose');

//configs reading for DB and more
const db  = require('./configs/db');

//db global connect
mongooseDB.Promise = global.Promise;
mongooseDB.connect(db.url, db.options, function (err) {
  if (err) {console.log(err);}
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var autorisedRouter = require('./routes/authorised');
var hubsRouter = require('./routes/hubs');
var projectsRouter = require('./routes/projects');
var dashboardRouter = require('./routes/dashboard');
var checklistsRouter = require('./routes/checklists');

var app = express();
app.disable('x-powered-by');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport session
app.use(session({
  secret: 'penkoloda',
  store: new MongoStore({mongooseConnection: mongooseDB.connection }),
  resave: true,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forgecallback', autorisedRouter);
app.use('/hubs', hubsRouter);
app.use('/projects', projectsRouter);
app.use('/dashboard', dashboardRouter);
app.use('/checklists', checklistsRouter);


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

module.exports = app;
