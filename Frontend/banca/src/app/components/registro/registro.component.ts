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
          this.mensaje="Usuario Registrado Con éxito"
        },error=>{
            console.log(error);
        }

      );
  }



}


}




  function TodoBien(reg:Registro):boolean{
  let tBien=true;
    if(reg.nombre==''){
      tBien=false;
      if(reg.apellido==''){
        tBien=false;
        if(reg.dpi==0||reg.dpi.toString()==''){
          tBien=false;
          if(reg.cuenta==0||reg.cuenta.toString()==''){
            tBien=false;
            if(reg.saldo==0||reg.saldo.toString()==''){
              tBien=false
              if(!reg.correo.includes('.com')||!reg.correo.includes('@')||reg.correo==""){
                  tBien=false
                if(reg.contrasenia==''){
                  tBien=false
                }else{
                 // this.mensaje="El campo Contraseña no puede estar vacía"
                }
              }else{
               // this.mensaje="El campo Correo no es Admitido"
              }
            }else{
            //  this.mensaje="El campo Saldo no puede ser 0 o vacío"  
            }
          }else{
            ///this.mensaje="El campo Cuenta no puede ser 0 o vacío"  
          }

        }else{
          //this.mensaje="El campo DPI no puede ser 0 o vacío" 
        }
      }else{
       // this.mensaje="El campo Apellido no puede Estar Vacío" 
      }

    }else{
      //  this.mensaje="El campo Nombre no puede Estar Vacío"  
    }

  return tBien;
}