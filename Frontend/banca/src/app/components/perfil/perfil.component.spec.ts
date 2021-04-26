import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuario } from 'src/app/models/Task';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Metodo ngOnInit con usuario', () => {
    localStorage.setItem('Usuario', JSON.stringify({nombres:"asdf", apellidos:"asdf", dpi: 111, id_cuenta: 111, saldo: 111, correo: "asdf", pass: "asdf"}));

    //let result:Usuario = JSON.parse(localStorage.getItem('Usuario'));
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('Metodo ngOnInit sin usuario', () => {
    localStorage.setItem('Usuario', JSON.stringify({nombres:"asdf", apellidos:"asdf", dpi: 111, id_cuenta: 111, saldo: 111, correo: "asdf", pass: "asdf"}));
    
    let result:Usuario = JSON.parse(localStorage.getItem('Usuario'));
    //expect(result).toBe(null);
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
