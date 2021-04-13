import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistroService } from 'src/app/services/registro.service';
import {Registro  } from "../../models/Task";

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let reg:Registro;
  let reg2:Registro;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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

  });




});
