const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./middleware/indexRoutes');
require ("dotenv").config();
const { openApiSpecification } = require('./config/swaggerConfig');
const swaggerUi = require('swagger-ui-express');


const app = express();
app.use(express.json());
routerApi(app);

app.use('/docs', swaggerUi.serve);
  app.get('/docs', swaggerUi.setup(openApiSpecification));

const BD_URI = process.env.BD_URI;
const PORT = process.env.PORT;
 
mongoose.connect(process.env.DB_URI, {
  });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
console.log('Conexión exitosa a la base de datos');
    });

module.exports = app; 