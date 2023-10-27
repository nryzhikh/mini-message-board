var express = require('express');
var router = express.Router();
var Message = require('../models/Message');

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    const messages = Message.find();
    res.render('index', { title: 'Mini Messageboard', messages: messages }); 
  } catch (error) {
    res.render('error', {error: error});
  }
});



module.exports = router;
