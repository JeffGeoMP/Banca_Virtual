import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ConectionService } from './conection.service';
import { Usuario } from '../models/Task';

describe('ConectionService', () => {
  let service: ConectionService;

  let user: Usuario = {
    id_cuenta:1,
      nombres:"Alejandro",
      apellidos:"Marín",
      dpi:12345,
      saldo:10.5,
      correo:"AleG@g.com",
      pass:"1234"
  }

  beforeEach(async () => {
    localStorage.setItem("Usuario", JSON.stringify(user));
    await TestBed.configureTestingModule({
      declarations: [ConectionService ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
      ]
    })
    .compileComponents();
  });

  let httpTestingController:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConectionService],
      imports: [
        HttpClientTestingModule 
      ],
    });
    
    service = TestBed.inject(ConectionService);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

});
