import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  ConsultarSaldo(User:String){
    let url1 = 'http://localhost:3000/usuario/saldo/'+User;
    return this.http.get(url1);
}

}
