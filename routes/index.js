var express = require('express');
var MongoDao = require('../dao/MongoDao');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next) {
	MongoDao.insertData(req, res, next);
});

router.get('/select', function(req, res, next) {
	MongoDao.selectData(req, res, next);
});

router.get('/update', function(req, res, next) {
	MongoDao.updateData(req, res, next);
});

router.get('/delete', function(req, res, next) {
	MongoDao.delData(req, res, next);
});

router.get('/invoke', function(req, res, next) {
	MongoDao.invokeProcData(req, res, next);
});

module.exports = router;
