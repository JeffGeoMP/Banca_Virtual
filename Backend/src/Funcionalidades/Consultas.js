
class Consultas{
    constructor(){ }

    VerificarUsuario(id, pass){
        return `SELECT * FROM Usuario U WHERE U.id_cuenta = '${id}' AND U.pass = '${pass}';`;
    }

    Registrar(nom,ap,dpi,cuen,suel,corr,contra){
        return `Insert into Usuario(id_cuenta,nombres,apellidos,dpi,saldo,correo,pass) Values('${cuen}',${nom},${ap},${dpi},${suel},${corr},${contra})`;
    }

}

module.exports = {Consultas}