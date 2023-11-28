const express = require('express');
const audioRouter = express.Router();
const audioController = require("../controllers/audioController")


// Ver todos los audios
audioRouter.get('/audio', audioController.getAllAudios);

// Crear audio - guardar
audioRouter.post('/audio', audioController.createAudios);

module.exports = audioRouter;
