import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ConectionService } from 'src/app/services/conection.service';
import { Usuario} from "src/app/models/Task";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  id_usuarioemisor:Number = 2;
  nombreemisor:String = "Alan";
  montoemisor:Number = 0;
  cuentareceptor:Number = 0;


  constructor(private conexion: ConectionService) { 
    
  }

  ngOnInit(): void {
    this.obtener_usuario();
  }

  transfer(){
    let con = this.conexion.transferencia({
      'fecha': '00/00/0000',
      'id_emisor':this.id_usuarioemisor,
      'id_receptor':this.cuentareceptor,
      'monto':this.montoemisor
    });
    //console.log(this.cuentareceptor)
    con.subscribe((res)=>{
      //console.log(res);
      if(res != null){
        alert("Transferencia exitosa");
      }else{
        alert("Transferencia fallida");
      }
    });
  }

  obtener_usuario(){
    let result:Usuario = JSON.parse(localStorage.getItem('Usuario'));
    this.id_usuarioemisor = result.id_cuenta;
    this.nombreemisor = result.nombres;
  }

}
