const audio = require('../services/audioService')



async function getAllAudios(req, res){
    try{
        const audios = await audio.getAllAudios();
        res.json(audios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

async function createAudios(req, res){
    try{
        const { name, duration } = req.body; 
        const newAudio = new audio({ name, duration });
        const savedAudio = await newAudio.save();
        res.status(201).json(savedAudio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

module.exports = {
   getAllAudios,
   createAudios
}; 