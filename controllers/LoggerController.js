var mongoose = require("mongoose");
var Logger = require("../models/Logger");

var ctrl = {};

ctrl.list = function(req, res) {
  Logger.find({}).exec(function (err, lines) {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(lines);
    }
  });
};

ctrl.show = function(req, res) {
  Logger.findOne({_id: req.params.id}).exec(function (err, line) {
    if (err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(line);
    }
  });
};

ctrl.save = function(req, res) {
  var logger = new Logger(req.body);
  logger.save(function(err, data) {
    if(err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
};

ctrl.update = function(req, res) {
  Logger.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, line) {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(line);
  });
};

ctrl.delete = function(req, res) {
  Logger.remove({_id: req.params.id}, function(err) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json({ success: true });
    }
  });
};

module.exports = ctrl;
