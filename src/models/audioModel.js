const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
    name: String,
    duration: Number,
});

module.exports = mongoose.model('audio', audioSchema);