import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario;

  constructor(private router: Router) {
    if(localStorage.getItem("Usuario") == null){
      this.usuario = false;
    }else{
      this.usuario = true
    }
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("Usuario");
  }

}
