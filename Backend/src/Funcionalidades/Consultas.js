
class Consultas{
    constructor(){ }

    VerificarUsuario(id, pass){
        return `SELECT * FROM Usuario U WHERE U.id_cuenta = '${id}' AND U.pass = '${pass}';`;
    }

}

module.exports = {Consultas}