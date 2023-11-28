const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('images', imagesSchema);