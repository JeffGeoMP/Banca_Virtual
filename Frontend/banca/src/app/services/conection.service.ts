import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  
  dir = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  loginUsuario(data){
    let url = `${this.dir}/login`;
    return this.http.post(url, data);
  }

<<<<<<< HEAD
  getTransacciones(id:Number):Observable<Transaccion[]>{
    return this.http.get<Transaccion[]>(`${this.dir}/transacciones/${id}`);
  }
=======
  ConsultarSaldo(User:String){
    let url1 = 'http://localhost:3000/usuario/saldo/'+User;
    return this.http.get(url1);
}

>>>>>>> develop
}
