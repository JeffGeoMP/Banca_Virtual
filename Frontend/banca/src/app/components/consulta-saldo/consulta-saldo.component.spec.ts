import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultaSaldoComponent } from './consulta-saldo.component';
import { Usuario,Datos } from 'src/app/models/Task';
import { ConectionService } from 'src/app/services/conection.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class mockReporte extends ConectionService {
  ConsultarSaldo(User:String){
    console.log("Mock Reporte");
    let data: Datos[] = [
      {
        nombres:'Alejandro',
        apellidos:'Marín',
        saldo:1
      },
    ];
    return of(data);
  }
}

fdescribe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let component1:ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  let service: ConectionService;
  let mockService: mockReporte;
  let http: HttpClient;


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
        declarations: [ConsultaSaldoComponent ],
        imports: [
          HttpClientTestingModule
        ],
        providers: [
        ]
      })
      .compileComponents();
    });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(ConectionService);
    mockService = new mockReporte(http);

  });

  afterEach(()=>{
    localStorage.removeItem("Usuario");
  });

  it('should Iniciar valores', () => {
    expect(component.Iniciar()).toBeUndefined();
  });

  it('should Consultar saldo', () => {

    component.Consultar(1);
    expect(component.Datos1.saldo).toBeTruthy(10.5);
    expect(component.Datos1.nombres).toBeTruthy('Alejandro');
    expect(component.Datos1.apellidos).toBeTruthy('Marín');
  });

  it('Obtener datos', ()=>{
    component1 = new ConsultaSaldoComponent(mockService);
  
    component1.nombre = user.nombres;
    let resultado;

    service.ConsultarSaldo('1').subscribe(data=>{
      resultado = data;
      expect(component1.apellido.length).toBe('Marín');
    });
    expect(component1.Iniciar()).toBeUndefined();
  });

  
    
});
