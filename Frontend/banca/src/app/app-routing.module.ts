import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import {ConsultaSaldoComponent} from './components/consulta-saldo/consulta-saldo.component';
import {TransferenciaComponent} from './components/transferencia/transferencia.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  { path: 'reportes', component: ReportesComponent},
  { path:'Consulta', component: ConsultaSaldoComponent},
  {
    path: 'transferencia',
    component: TransferenciaComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
