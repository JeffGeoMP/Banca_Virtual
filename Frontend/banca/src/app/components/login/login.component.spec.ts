import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ConectionService } from 'src/app/services/conection.service';

import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Task';

class mockLogin extends ConectionService {

  loginUsuario(data) {
    console.log("entra mock login")
    return of({ "id": 1, "ok": true });
  }

}

describe('LoginComponent', () => {
  
  let component: LoginComponent;
  let service: ConectionService;
  let mockService: mockLogin;
  let http: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: '', pathMatch: 'full', redirectTo: '' }])
        , HttpClientModule]
      ,declarations: [LoginComponent],}
    ).compileComponents();
  });

  beforeEach(() => {
    //mockComponent=new LoginComponent(router,mockService);
    TestBed.configureTestingModule({
      providers: [ConectionService, HttpClient],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(ConectionService);
    mockService = new mockLogin(http);
    const routerstub: Router = TestBed.get(Router);
    component = new LoginComponent(routerstub, mockService);
  });

  it('Validar empty en datos usuario y pass - 1', () => {
    component.pass = "123";
    component.usuario = "123"
    expect(component.login()).toBeUndefined();
  });

  it('Logeo exitoso en la db - 2',
    inject([HttpTestingController, ConectionService],
      (httpMock: HttpTestingController, service: ConectionService) => {
        // We call the service
        service.loginUsuario({id_cuenta:123, pass:"123"}).subscribe(data => {
          let aux = data as Usuario;
          expect(aux.id_cuenta).toBe(123);
          expect(aux.pass).toBe('123');
        });

        const req = httpMock.expectOne('http://localhost:3000/login');
        expect(req.request.method).toEqual('POST');
        req.flush({ id_cuenta:123, pass: "123" });

      })
  );

  it('Datos no validos en la db - 3',
    inject([HttpTestingController, ConectionService],
      (httpMock: HttpTestingController, service: ConectionService) => {
        service.loginUsuario({id_cuenta:1234, pass:"1234"}).subscribe(data => {
          let aux = data as Usuario;
          expect(aux.pass).toBe("1234");
          expect(aux.id_cuenta).toBe(-1);
        });

        const req = httpMock.expectOne('http://localhost:3000/login');
        expect(req.request.method).toEqual('POST');
        req.flush({ "pass": "1234", "id_cuenta": -1 });
      })
  );

});