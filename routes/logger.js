var express = require('express');
var router = express.Router();
var logger = require('../controllers/LoggerController');

router.get('/', function(req, res) {
  logger.list(req, res);
});

router.get('/:id', function(req, res) {
  logger.show(req, res);
});

router.post('/', function(req, res) {
  logger.save(req, res);
});

router.put('/:id', function(req, res) {
  logger.update(req, res);
});

router.delete('/:id', function(req, res, next) {
  logger.delete(req, res);
});

module.exports = router;
