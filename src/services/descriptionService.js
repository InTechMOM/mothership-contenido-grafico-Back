const storyTelling = require('../models/descriptionModel');

async function getDescription(){
    return await storyTelling.findById();
}


module.exports = {
    getDescription
}; 
