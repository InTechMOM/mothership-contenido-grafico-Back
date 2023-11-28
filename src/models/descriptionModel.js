const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
    description: String,
});

module.exports = mongoose.model('storyTelling', descriptionSchema);