import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProcedimientosComponent} from './AdminView/procedimientos/procedimientos.component';
import {AdminHomeComponent} from './AdminView/admin-home/admin-home.component';
import {EquipoComponent} from './AdminView/equipo/equipo.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },
  { path: 'Home', component: AdminHomeComponent },

  {
    path: 'HospitalAdmin', pathMatch: 'prefix',
    children: [
      { path: 'ProcedimientosView', pathMatch: 'prefix', component: ProcedimientosComponent},
      { path: 'EquipoView', pathMatch: 'prefix', component: EquipoComponent},

      { path: '', component:  AdminHomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
