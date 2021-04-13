import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistroService } from 'src/app/services/registro.service';
import {Registro  } from "../../models/Task";

import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class mockRegistro extends RegistroService {

  EnviarRegistro(data:Registro) {

    return of({ "codigo":123 });
  }

}



describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let reg:Registro;
  let reg2:Registro;

  let service: RegistroService;
  let mockService: mockRegistro;
  let http: HttpClient;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [RegistroService, HttpClient],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(RegistroService);
    mockService = new mockRegistro(http);
  });



  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it("prueba registro",()=>{
    
    reg={
      nombre:"juan alberto",
      apellido:"lopez barrera",
      dpi:7894949,
      cuenta:78499494654,
      saldo:7842,
      correo:'mario@gmail.com',
      contrasenia:"45fds"
    };

    reg.nombre=''
    reg.apellido=''
    reg.dpi=0
    reg.cuenta=0
    reg.saldo=0
    reg.correo=''
    reg.contrasenia=''
    expect(component.Enviar(reg)).toBeUndefined()

  });*/

  
  it('prueba de Registro 2',()=>{
    component = new RegistroComponent(mockService);
    /*component.transacciones = [];
    component.id_usuario = user.id_cuenta;
    let resultado;*/
    
    reg2={
      nombre:"juan alberto",
      apellido:"lopez barrera",
      dpi:7894949,
      cuenta:78499494654,
      saldo:7842,
      correo:'mario@gmail.com',
      contrasenia:"45fds"
    };


    reg2.nombre=''
    reg2.apellido=''
    reg2.dpi=0
    reg2.cuenta=0
    reg2.saldo=0
    reg2.correo=''
    reg2.contrasenia=''
    
/*
  
      expect(service.EnviarRegistro(reg2).subscribe(
          result=>{
            expect(component.codigo).toBeTruthy();
            
          }
      ));*/
    
      expect(component.Enviar(reg2)).toBeUndefined()
  }
  );




});
