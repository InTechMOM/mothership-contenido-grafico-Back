const express = require('express');

const audioRouter = require('../routes/audioRouter');
const imageRouter = require('../routes/imagesRouter');
const generateRouter = require('../routes/generateRouter');
const descriptionRouter = require('../routes/descriptionRouter')


function routerApi(app) {
  const router = express.Router();
  
  app.use('/api/v1', router);
 
  router.use('/description', descriptionRouter)
  router.use('/generateImg', generateRouter);
  router.use('/generate/images', generateRouter);
  router.use('/image', imageRouter);
  router.use('/audio', audioRouter);
}

module.exports = routerApi;