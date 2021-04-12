import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComponent } from './reportes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Usuario } from 'src/app/models/Task';
//import { ConectionService } from 'src/app/services/conection.service';
class conectionServiceMock {
  //getItem = jasmine.createSpy('conectionService.getTransacciones');
}

fdescribe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;
  //let service: ConectionService;
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
        HttpClientTestingModule
      ],
      providers: [
        /*ConectionService,
        {
          provide: ConectionService,
          useClass: conectionServiceMock,
        }*/
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    component.transacciones = [];

    component.obtener_transacciones();

    expect(component.transacciones.length).toBeLessThanOrEqual(0);

    //expect().toBeUndefined();
  });

  it('Descargar pdf', ()=>{
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

    component.ngOnInit();

    expect(component.downloadPDF()).toEqual("pdf descargado");
  });
});
