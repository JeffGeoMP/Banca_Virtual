import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { ReportesComponent } from './reportes.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Transaccion, Usuario } from 'src/app/models/Task';
import { ConectionService } from 'src/app/services/conection.service';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
class mockReporte extends ConectionService {
  getTransacciones(id:Number){
    console.log("Mock Reporte");
    let data: Transaccion[] = [
      {
        id_transferencia: 2,
        fecha: "2021-04-11",
        monto: 1.50,
        nombres: "Pablo",
        apellidos: "Rodriguez", 
      },
    ];
    return of(data);
  }
}

describe('ReportesComponent', () => {
  let fixture: ComponentFixture<ReportesComponent>;
  let component: ReportesComponent;
  let service: ConectionService;
  let mockService: mockReporte;
  let http: HttpClient;

  let user: Usuario = {
    id_cuenta:3,
    nombres:"Daniel",
    apellidos:"Ricciardo",
    dpi:2791808530701,
    saldo:50.5,
    correo:"daniel@gmail.com",
    pass:"1234",
  }

  beforeEach(async () => {
    localStorage.setItem("Usuario", JSON.stringify(user));
    await TestBed.configureTestingModule({
      declarations: [ ReportesComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [ConectionService, HttpClient],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(ConectionService);
    mockService = new mockReporte(http);
    
    component.transacciones = [
      {
        id_transferencia: 1,
        fecha: "2021-04/11",
        monto: 12.10,
        nombres: "Marta",
        apellidos: "Flores",
      },
      {
        id_transferencia: 2,
        fecha: "2021-04/11",
        monto: 25.15,
        nombres: "Marta",
        apellidos: "Flores",
      },
    ];
    
  });

  afterEach(()=>{
    localStorage.removeItem("Usuario");
  })

  it('should create', () => {
    localStorage.setItem("Usuario", JSON.stringify(user));

    expect(component).toBeTruthy();

    expect(component.id_usuario).toEqual(user.id_cuenta);
  });

  it('Inicializar variables', ()=>{
    //Arrange
    localStorage.setItem("Usuario", JSON.stringify(user));

    //Act
    component.iniciar_variables();
    
    // Assert
    expect(component.id_usuario).toEqual(user.id_cuenta);
    expect(component.nombre_usuario).toEqual(`${user.nombres} ${user.apellidos}`);
  });

  it('Obtener datos', ()=>{
    component = new ReportesComponent(mockService);
    component.transacciones = [];
    component.id_usuario = user.id_cuenta;
    let resultado;

    service.getTransacciones(user.id_cuenta).subscribe(data=>{
      resultado = data;
      console.log(resultado);
      expect(component.transacciones.length).toBeGreaterThanOrEqual(0);
    });
    expect(component.obtener_transacciones()).toBeUndefined();
  });

  it('Descargar pdf', ()=>{
    component.ngOnInit();

    expect(component.downloadPDF()).toEqual("pdf descargado");
  });

  /**
   fit('Error datos', inject([HttpTestingController, ConectionService],
    (httpMock: HttpTestingController, service: ConectionService) => {
      service.getTransacciones(1).subscribe(data => {
        console.log("tood ok");
      });

      const req = httpMock.expectOne(`http://localhost:3000/transacciones/${user.id_cuenta}`);
      expect(req.request.method).toEqual('GET');
      req.flush({ "pass": "1234", "id_cuenta": -1 });
    })
  );
   */
});
