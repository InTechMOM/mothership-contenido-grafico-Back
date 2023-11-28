const audio = require('../models/audioModel');

async function getAllAudios(){
    return await audio.find();
}

async function createAudio(){
    const newAudio = new audio(audioData);
    return await newAudio.save();
}

module.exports = {
    getAllAudios,
    createAudio
}; 
