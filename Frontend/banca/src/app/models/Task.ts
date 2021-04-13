export interface Usuario{
    id_cuenta:Number;
    nombres:String;
    apellidos:String;
    dpi:number;
    saldo:number;
    correo:String;
    pass:String;
}
export interface Datos{
    saldo:Number,
    nombres:String,
    apellidos:string
}

export interface Transaccion{
    id_transferencia: Number,
    fecha: String,
    monto: Number,
    nombres: String,
    apellidos: String,
}
export interface Registro{
    nombre:string;
    apellido:string;
    dpi:number;
    cuenta:number;
    saldo:number;
    correo:string;
    contrasenia:string;
}


