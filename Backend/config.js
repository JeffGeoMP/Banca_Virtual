/**
 * Contiene la conexion a la base de datos
 */
const {Pool} = require('pg');

const db = new Pool({
    user: 'postgres',       //Usuario predefinido en postgresql
    host: 'localhost',      //Ubicacion predefinida
    password: 'password',     //Contraseña de usuario
<<<<<<< HEAD
    // @manases = password
    // @miguel = 30668231
    database: 'practica3y4'      //base de datos
=======
    database: 'Practica3y4'      //base de datos
>>>>>>> develop
});

module.exports = db;