const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Mothership contenido grafico',
      version: '1.0.0',
      description: 'Generacion de imagenes con IA y gestion de imagen y audio',
    },
  },
  apis: [
    'app.js',
    './middleware/indexRoutes.js',
    './routes/audioRouter.js',
    './controllers/imageController',
    './controllers/generateController',
    './controllers/descriptionController'
  ],
};

const openApiSpecification = swaggerJSDoc(swaggerOptions);

module.exports = { openApiSpecification };