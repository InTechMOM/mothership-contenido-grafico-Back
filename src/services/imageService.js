const images = require('../models/imagesModel');

async function getAllImages(){
    return await images.find();
}

async function createImage(){
    const newImage = new images(imageData);
    return await newImage.save();
}

module.exports = {
    getAllImages,
    createImage
}; 
