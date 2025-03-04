var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
var cors=require('cors')
require("dotenv").config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jobRouter=require('./routes/job')
console.log("EMAIL:", process.env.EMAIL);
console.log("PASSWORD:", process.env.PASSWORD);

mongoose.connect('mongodb://localhost:27017/job')
.then(()=>{
  console.log("Database Connected successfylly")
})
.catch(err=>console.log(err))
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jobs',jobRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
