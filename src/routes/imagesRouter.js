const express = require('express');
const imageRouter = express.Router();
const imageController = require("../controllers/imageController")


// Ver todos los audios
imageRouter.get('/image', imageController.getAllImages);

// Crear audio - guardar
imageRouter.post('/image', imageController.createImage);

module.exports = imageRouter;
