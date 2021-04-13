import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'Login', component: LoginComponent }])]
      ,declarations: [NavbarComponent],}
    ).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create - 0', () => {
    expect(component).toBeTruthy();
  });

  it('Validar deslogeo - 1', () => {
    expect(component.logout()).toBeUndefined();
  });

  it('Validar usuario esta logeado - 2', () => {
    component.usuario = true;
    expect(component.usuario).toBe(true);
  });

  it('Validar usuario no esta logeado - 3', () => {
    component.usuario = false;
    expect(component.usuario).toBe(false);
  });
});
