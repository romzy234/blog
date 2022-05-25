var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const {config} = require('./config')
require('./config/passport');
const custom = require('./models/custom')
const chalk = require('chalk')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var db = config.cloud // change data 
// mongodb connector 
mongoose.connect(db, {
  useNewUrlParser: true,useUnifiedTopology:true
},(error)=>{
  if(error){console.log(error.message)}else{
    console.log(chalk.green("database connected Successfully"));
  }
});

var store = new MongoDBStore({
  uri: db,
  collection: 'mySessions'
},
function(error) {
  if(error){
    console.log(error);
  }
});


store.on('error', function(error) {
  console.log("Error occurs no storage of session on db");
});

app.use(session({
  secret: "ilovecoding",//process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: store, // uncomment this for mongo storage
  cookie: {
      maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//passport

app.use(passport.initialize());
app.use(passport.session());
  
app.use((req, res, next) => {
  res.locals.logUser = req.user;  
  next();
});


app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



require('./config/createCustom');
require('./config/createSuperAdmin');

app.use((req, res, next) => {
  custom.aggregate([{
    $match: {

    }
  }]).then(data =>{
    let i = data.length - 1;
    res.locals.custom = data[i] 
    next();
  }).catch(error => {
    console.log(error)
  })
});


// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

console.log(chalk.red("remeber to work on delete post bin"))