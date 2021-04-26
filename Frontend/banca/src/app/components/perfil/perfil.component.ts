import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Task';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    let result:Usuario = JSON.parse(localStorage.getItem('Usuario'));
    
    this.nombre = result.nombres;
    this.apellido = result.apellidos;
    this.dpi = result.dpi;
    this.cuenta = result.id_cuenta;
    this.saldo = result.saldo;
    this.email = result.correo;
  }

  nombre;
  apellido;
  dpi;
  cuenta;
  saldo;
  email;

}
