import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConsultaSaldoComponent } from './consulta-saldo.component';
import { Usuario,Datos } from 'src/app/models/Task';

fdescribe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

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
  });

  afterEach(()=>{
    localStorage.removeItem("Usuario");
  });

  it('should Iniciar valores', () => {
    component.ngOnInit();
    expect(component.usuario[0].id_cuenta).toBeTruthy(1);
  });

  it('should Consultar saldo', () => {

    component.Consultar(1);
    expect(component.Datos1.saldo).toBeTruthy(10.5);
    expect(component.Datos1.nombres).toBeTruthy('Alejandro');
    expect(component.Datos1.apellidos).toBeTruthy('Marín');
  });
    
});
