//import { TestBed } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroService } from './registro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Registro } from '../models/Task';

describe('RegistroService', () => {
  let service: RegistroService;
  let reg:Registro;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(RegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service registro', () => {
    reg={
      nombre:"juan alberto",
      apellido:"lopez barrera",
      dpi:7894949,
      cuenta:78499494654,
      saldo:7842,
      correo:'mario@gmail.com',
      contrasenia:"45fds"
    };
    
    expect(service.EnviarRegistro(reg).subscribe(
      result=>{
          expect(result).toBeUndefined();
      }
    )).toBeDefined();
  });

});
