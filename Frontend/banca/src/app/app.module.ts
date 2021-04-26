import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ConsultaSaldoComponent } from './components/consulta-saldo/consulta-saldo.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportesComponent,
    ConsultaSaldoComponent,
    TransferenciaComponent,
    NavbarComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
