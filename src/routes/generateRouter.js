const express = require('express');
const generateRouter = express.Router();
const generateController = require('../controllers/generateController');


generateRouter.post('/generateImg', generateController.generateImg)
generateRouter.get('/generate/images', generateController.showImages)


module.exports = generateRouter;
