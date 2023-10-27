const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date }
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;