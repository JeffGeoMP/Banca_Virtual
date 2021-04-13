
class Consultas{
    constructor(){ }

    VerificarUsuario(id, pass){
        return `SELECT * FROM Usuario U WHERE U.id_cuenta = '${id}' AND U.pass = '${pass}';`;
    }
    ConsultarSaldo(idUsu){
        return `SELECT saldo,nombres,apellidos FROM Usuario U  WHERE U.id_cuenta = '${idUsu}';`;
   
    }

}

module.exports = {Consultas}