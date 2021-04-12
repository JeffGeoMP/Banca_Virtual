import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  user;
  usuario:string;
  idusuario:string;
  montoemisor:number;
  cuentaemisor:number;


  constructor(private conexion: ConectionService) { 
    
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('Usuario'))
    console.log(this.user)
  }

  transfer(){
    if(this.user[0].id_cuenta == this.cuentaemisor){
      alert("No se permite envios a la misma cuenta");
    }else if (this.montoemisor <= 0 ) {
      alert("El monto a transferir debe ser mayor a 0")
    }else if (this.cuentaemisor = 0){
      alert("El numero de cuenta es invalido")
    }else {
      let con1 = this.conexion.actualizaremisor({
        'id':this.user[0].id_cuenta,
        'monto':this.montoemisor
      });

      let con2 = this.conexion.actualizareceptor({
        'id':this.cuentaemisor,
        'monto':this.montoemisor
      });

      con1.subscribe((res)=>{
        if(res != null){
          alert("Transferencia exitosa");
        }else{
          alert("Transferencia fallida");
        }
      });

      con2.subscribe((res)=>{
        if(res != null){
          alert("Transferencia exitosa");
        }else{
          alert("Transferencia fallida");
        }
      });
    }
    console.log(this.user[0].id_cuenta)
    console.log(this.user[0].saldo)
    console.log(this.montoemisor)
    console.log(this.cuentaemisor)
    this.montoemisor=0.00;
    this.cuentaemisor=0;

  }

}
