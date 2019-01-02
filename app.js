var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var defaultConnectionUrl = process.env.MONGODB_URL || 'mongodb://localhost:37017/logger'
console.log('defaultConnectionUrl: ' + defaultConnectionUrl);

mongoose.connect(defaultConnectionUrl, { useMongoClient: true })
  .then(() => console.log('Connection succesful'))
  .catch((err) => console.error(err));

var index = require('./routes/index');
var log = require('./routes/logger');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/logger', log);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
