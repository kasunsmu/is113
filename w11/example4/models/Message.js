const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Message', MessageSchema);
