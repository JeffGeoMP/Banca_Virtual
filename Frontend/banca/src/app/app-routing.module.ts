import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { ReportesComponent } from './components/reportes/reportes.component';
=======
import {ConsultaSaldoComponent} from './components/consulta-saldo/consulta-saldo.component'
>>>>>>> develop

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
<<<<<<< HEAD
  },
  { path: 'reportes', component: ReportesComponent},
=======
  },{ path:'Consulta', component: ConsultaSaldoComponent},
>>>>>>> develop
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
