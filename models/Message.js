const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
    added: { type: Date }
});

const Message = mongoose.model("Message", MessageSchema, "messages");
module.exports = Message;