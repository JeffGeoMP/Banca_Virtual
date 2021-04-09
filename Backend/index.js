const db = require('./config');
const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const cors = require('cors');


/**
 * Configuraciones del Servidor
 */
const app = express();
const port = 3000;
app.set('port', port);


/**
 * Middlewares
 */
app.use(morgan('dev'));                         //Para correr el server desde npm run dev
app.use(parser.json());                         //Valida que el intercambio sea de tipo json
app.use(parser.urlencoded({ extended:false})); //Subida de Imagenes al server
app.use(cors());

/**
 * Rutas
 */
app.use(require('./src/Routes/Usuarios'));

/**
 * Archivos Estaticos
 */
app.use(express.static('public'));

/**
 * Ejecucion del Servidor
 */
app.listen(app.get('port'),()=>{
    console.log('Api REST corriendo en http://localhost:' + port);
});