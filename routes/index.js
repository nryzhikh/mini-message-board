var express = require('express');
var router = express.Router();
var Message = require('../models/Message');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err.message);
}
});

module.exports = router;
