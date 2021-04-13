export interface Usuario{
    id_cuenta:Number;
    nombres:String;
    apellidos:String;
    dpi:number;
    saldo:number;
    correo:String;
    pass:String;
}

export interface Transaccion{
    id_transferencia: Number,
    fecha: String,
    monto: Number,
    nombres: String,
    apellidos: String,
}




