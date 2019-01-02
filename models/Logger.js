var mongoose = require('mongoose');

var Sch = new mongoose.Schema({
  type: { type: String, default: 'info' },
  msg: String,
  at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logger', Sch);
