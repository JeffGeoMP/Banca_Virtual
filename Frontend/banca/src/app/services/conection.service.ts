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

  actualizaremisor(data){
    let url = `${this.dir}/actualizaremisor`
    return this.http.post(url,data);
  }

  actualizareceptor(data){
    let url = `${this.dir}/actualizareceptor`
    return this.http.post(url,data);
  }
}
