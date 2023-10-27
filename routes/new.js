var express = require('express');
var router = express.Router();
var messages = require('../messages');

router.post('/', (req, res) => {
  const text = req.body.message;
    const user = req.body.user;
    messages.push({text: text, user: user, added: new Date()});
    res.redirect('/');

});

module.exports = router;
