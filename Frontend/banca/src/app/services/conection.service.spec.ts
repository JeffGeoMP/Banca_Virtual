import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
