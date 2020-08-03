import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProcedimientosComponent} from './AdminView/procedimientos/procedimientos.component';
import {AdminHomeComponent} from './AdminView/admin-home/admin-home.component';
import {EquipoComponent} from './AdminView/equipo/equipo.component';
import {SalonesComponent} from './AdminView/salones/salones.component';
import {CamaComponent} from './AdminView/cama/cama.component';
import {PersonalComponent} from './AdminView/personal/personal.component';
import {PacienteComponent} from './DoctorView/paciente/paciente.component';
import {AgregarComponent} from './PacienteView/agregar/agregar.component';
import {ReservacionComponent} from './PacienteView/reservacion/reservacion.component';
import {HomePacienteComponent} from './PacienteView/home-paciente/home-paciente.component';
import {HomeDoctorComponent} from './DoctorView/home-doctor/home-doctor.component';
import {HistorialComponent} from './DoctorView/historial/historial.component';
import {sincronizacionComponent} from './AdminView/sincronizacion/sincronizacion.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },
  { path: 'Home', component: AdminHomeComponent },
  {
    path: 'HospitalDoctor', pathMatch: 'prefix',
    children: [
      { path: 'HistorialView', pathMatch: 'prefix', component: HistorialComponent},
      { path: 'PacientesView', pathMatch: 'prefix', component: PacienteComponent},
      { path: '', component:  HomeDoctorComponent}
    ]
  },
  {
    path: 'HospitalPaciente', pathMatch: 'prefix',
    children: [
      { path: 'ReservacionView', pathMatch: 'prefix', component: ReservacionComponent},
      { path: 'PacientesView', pathMatch: 'prefix', component: AgregarComponent},
      { path: '', component:  HomePacienteComponent}
    ]
  },
  {
    path: 'HospitalAdmin', pathMatch: 'prefix',
    children: [
      { path: 'ProcedimientosView', pathMatch: 'prefix', component: ProcedimientosComponent},
      { path: 'PersonalView', pathMatch: 'prefix', component: PersonalComponent},
      { path: 'EquipoView', pathMatch: 'prefix', component: EquipoComponent},
      { path: 'SalonView', pathMatch: 'prefix', component: SalonesComponent},
      { path: 'CamaView', pathMatch: 'prefix', component: CamaComponent},
      { path: 'SincronizacionView', pathMatch: 'prefix', component: sincronizacionComponent},
      { path: '', component:  AdminHomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
