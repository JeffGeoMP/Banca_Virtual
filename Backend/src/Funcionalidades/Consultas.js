
class Consultas{
    constructor(){ }

    VerificarUsuario(id, pass){
        return `SELECT * FROM Usuario U WHERE U.id_cuenta = '${id}' AND U.pass = '${pass}';`;
    }

    actualizarsaldoemisor(id,monto){
        return `UPDATE Usuario SET saldo=saldo-'${monto}' WHERE id_cuenta='${id}';`;
    }    

    actualizarsaldoreceptor(id,monto){
        return `UPDATE Usuario SET saldo=saldo+'${monto}' WHERE id_cuenta='${id}';`;
    }

    inserttransfer(fecha,monto,idemisor,idreceptor){
        return `INSERT INTO Transferencia(fecha,monto,id_emisor,id_receptor) VALUES('${fecha}','${monto}','${idemisor}','${idreceptor}');`
    }
}

module.exports = {Consultas}