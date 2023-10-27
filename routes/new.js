var express = require('express');
var router = express.Router();
var Message = require('../models/Message');
var mongoose = require('mongoose');

router.post('/', async (req, res) => {
    try {
        const newMessage = new Message({
            user: req.body.user,
            message: req.body.message,
            added: new Date()
        });

        await newMessage.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
