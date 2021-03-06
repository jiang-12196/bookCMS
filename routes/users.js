var express = require('express');
var router = express.Router();
var user_controller = require('../controller/userCtrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/addUser', function(req, res, next) {
  user_controller.add(req, res, next);
});

router.get('/selectUser', function(req, res, next) {
  user_controller.select(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    user_controller.delete(req, res, next);
});

module.exports = router;
