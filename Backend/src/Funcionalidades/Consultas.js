class Consultas{
    constructor(){ }

    VerificarUsuario(id, pass){
        return `SELECT * FROM Usuario U WHERE U.id_cuenta = '${id}' AND U.pass = '${pass}';`;
    }
    ConsultarSaldo(idUsu){
        return `SELECT saldo,nombres,apellidos FROM Usuario U  WHERE U.id_cuenta = '${idUsu}';`;
   
    }

    transacciones(id){
        return `SELECT id_transferencia, fecha, monto, nombres, apellidos FROM transferencia
        INNER JOIN (
            SELECT id_cuenta, nombres, apellidos FROM usuario
        ) as X
        ON id_receptor = X.id_cuenta
        WHERE id_emisor = ${id};`
    }

}

module.exports = {Consultas}