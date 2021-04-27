import { Component, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/services/conection.service';
import { Datos,Usuario} from '../../models/Task';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {
  Datos1!:Datos;
  usuario:Usuario[]=[];
  saldo!:any;
  nombre!:any;
  apellido!:any;


  constructor(private conexion: ConectionService) { }

  ngOnInit(): void {
    this.Iniciar();
  }
  Iniciar(){
    let usuario1:Usuario= JSON.parse(localStorage.getItem('Usuario')); 
    this.Consultar(usuario1.id_cuenta);
  }

  Consultar(id:any){
     this.conexion.ConsultarSaldo(id).subscribe((res: Datos[]) =>{
       this.Datos1=res[0];
       this.saldo=this.Datos1.saldo;
       this.nombre=this.Datos1.nombres;
       this.apellido=this.Datos1.apellidos;
     });
  }

}
