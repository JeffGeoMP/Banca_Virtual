import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { TransferenciaComponent } from './transferencia.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ConectionService } from 'src/app/services/conection.service';
import { Usuario, Transaccion } from 'src/app/models/Task';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class mockTransaccion extends ConectionService{
  transferencia(data){
    return of({"msg":"true"});
  }
}


fdescribe('TransferenciaComponent', () => {
  let component: TransferenciaComponent;
  let fixture: ComponentFixture<TransferenciaComponent>;
  let service: ConectionService;
  let mockService: mockTransaccion;
  let http: HttpClient;


  let user: Usuario = {
    id_cuenta: 2,
    nombres: 'Brandon',
    apellidos: 'Lopez',
    dpi: 4566335753454,
    saldo: 6184.00,
    correo: 'pedrolop@gmail.com',
    pass: '123'
  }

  beforeEach(async () => {
    //localStorage.setItem('Usuario',JSON.stringify(user));
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpClientModule],
      declarations: [ TransferenciaComponent ],
      providers:[ConectionService, HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(ConectionService);
    mockService = new mockTransaccion(http);
    component = new TransferenciaComponent(mockService);
  });

  it('should create', () => {
    localStorage.setItem("Usuario",JSON.stringify(user));
    
    expect(component).toBeTruthy();

    expect(component.id_usuarioemisor).toEqual(user.id_cuenta);
  });

  it('inicializa valores de usuario',()=>{
    localStorage.setItem("Usuario",JSON.stringify(user));

    component.obtener_usuario();

    expect(component.id_usuarioemisor).toEqual(user.id_cuenta);
    expect(component.nombreemisor).toEqual(user.nombres);
  });


  it('Transferencia exitosa',
    inject([HttpTestingController, ConectionService],
      (httpMock: HttpTestingController, service: ConectionService) => {
        // We call the service
        service.transferencia({
          'fecha': '00/00/0000',
          'id_emisor':1,
          'id_receptor':1,
          'monto':10
        }).subscribe(data => {
          let aux = data;
          expect(aux).toEqual({"msg":"true"});
        });

        const req = httpMock.expectOne('http://localhost:3000/transferencia');
        expect(req.request.method).toEqual('POST');
        req.flush({ "msg":"true" });

        
      })
  );


});
