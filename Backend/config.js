/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
    password: 'password',     //Contraseña de usuario
    // @manases = password
    // @miguel = 30668231
    database: 'practica3y4'      //base de datos
});

module.exports = db;