import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  dir = 'http://localhost:3000';

  
  EnviarRegistro(reg:Registro){
    let url = `${this.dir}/registro`;
    return this.http.post(url, reg);
  }

  


}
