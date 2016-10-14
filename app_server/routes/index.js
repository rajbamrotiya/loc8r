var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*
old method
var homepageController = function(req, res, next) {
  res.render('index', { title: 'Express' });
};
/!* GET home page. *!/
router.get('/', homepageController);
*/

/* GET home page. */
router.get('/',ctrlMain.index);

module.exports = router;
