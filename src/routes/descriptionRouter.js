const express = require('express');
const descriptionRouter = express.Router();
const descriptionController = require("../controllers/descriptionController")


// Ver descripcion
descriptionRouter.get('/description', descriptionController.getDescription);


module.exports = descriptionRouter;
