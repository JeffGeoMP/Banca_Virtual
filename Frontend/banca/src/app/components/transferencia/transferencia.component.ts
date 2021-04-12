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
  cuentareceptor:number;
  fechaactual;


  constructor(private conexion: ConectionService) { 
    
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('Usuario'));
    this.fechaactual = new Date();
    console.log(this.fechaactual);
  }

  transfer(){
    console.log(this.cuentareceptor)
    if(this.user[0].id_cuenta == this.cuentareceptor){
      alert("No se permite envios a la misma cuenta");
    }else if (this.montoemisor <= 0 ) {
      alert("El monto a transferir debe ser mayor a 0")
    }else if (this.cuentareceptor== 0){
      alert("El numero de cuenta es invalido")
    }else {
      let con = this.conexion.transferencia({
        'fecha': this.fechaactual,
        'id_emisor':this.user[0].id_cuenta,
        'id_receptor':this.cuentareceptor,
        'monto':this.montoemisor
      });
      console.log(this.cuentareceptor)
      con.subscribe((res)=>{
        console.log(res);
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
    
    this.montoemisor=0.00;
    this.cuentareceptor=0;

  }

}
