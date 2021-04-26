import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConectionService } from 'src/app/services/conection.service';
import { Usuario } from '../../models/Task';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario;
  pass;

  constructor(private router: Router, private conexion: ConectionService) {
    if(localStorage.getItem("Usuario") != null){
      this.router.navigate(['Perfil']);
    }
  }

  ngOnInit(): void {
  }

  login() {

    if (this.usuario == "" || this.pass == "") {
      alert("Datos vacios");
    } else {
      let con = this.conexion.loginUsuario({
        'User': this.usuario,
        'Pass': this.pass
      });

      //todo bien
      con.subscribe((res:Usuario) => {
        if (res != null) {
          localStorage.setItem("Usuario", JSON.stringify(res[0]));
          alert("Datos correctos");
          this.router.navigate(['Perfil']);
        } else {
          alert("Datos erroneos");
        }
      });
    }

  }

}
