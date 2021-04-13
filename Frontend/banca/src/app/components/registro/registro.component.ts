import { Component, OnInit } from '@angular/core';

import {Registro} from "../../models/Task";
import { RegistroService } from 'src/app/services/registro.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  constructor(private regServ:RegistroService) { }

  ngOnInit(): void {
  }

  devuelto:any;
  codigo:number=0;
  mensaje:String='';

  mireg:Registro={ 
    nombre:'',
    apellido:'',
    dpi:0,
    cuenta:0,
    saldo:0,
    correo:'',
    contrasenia:''

  }




 Enviar(reg:Registro){

  if(TodoBien(reg)){

      this.regServ.EnviarRegistro(reg).subscribe(
        result=>{
          this.devuelto=result;
          this.codigo=this.devuelto.codigo;
          console.log(this.devuelto);
          this.mensaje="Usuario Registrado Con éxito su código es: "+this.codigo
        },error=>{
            console.log(error);
        }

      );
  }else{
        this.mensaje="No se enviaron los datos revise los campos"
  }



}


}




  function TodoBien(reg:Registro):boolean{
  let tBien=true;
    if(reg.nombre==''){
      tBien=false;
      
    }
    if(reg.apellido==''){
      tBien=false;
    }

    if(reg.dpi==0){
      tBien=false;
    }
    if(reg.cuenta==0){
      tBien=false;
    }
    if(reg.saldo==0){
      tBien=false;
    }
  
    if(!reg.correo.includes('.com')){
      tBien=false;
    }

    if(!reg.correo.includes('@')){
      tBien=false;
    }

    if(reg.correo==""){
      tBien=false;
    }

    if(reg.contrasenia==''){
      tBien=false;
    }

  return tBien;
}