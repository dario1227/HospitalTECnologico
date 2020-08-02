import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CamaComponent } from './AdminView/cama/cama.component';
import { NavbarAdminComponent } from './AdminView/navbar-admin/navbar-admin.component';
import { EquipoComponent } from './AdminView/equipo/equipo.component';
import { PersonalComponent } from './AdminView/personal/personal.component';
import { SalonesComponent } from './AdminView/salones/salones.component';
import { ProcedimientosComponent } from './AdminView/procedimientos/procedimientos.component';
import { AdminHomeComponent } from './AdminView/admin-home/admin-home.component';
import { HistorialComponent } from './DoctorView/historial/historial.component';
import { PacienteComponent } from './DoctorView/paciente/paciente.component';
import { NavbarDoctorComponent } from './DoctorView/navbar-doctor/navbar-doctor.component';
import { HomeDoctorComponent } from './DoctorView/home-doctor/home-doctor.component';
import { AgregarComponent } from './PacienteView/agregar/agregar.component';
import { ReservacionComponent } from './PacienteView/reservacion/reservacion.component';
import { NavbarPacienteComponent } from './PacienteView/navbar-paciente/navbar-paciente.component';
import { HomePacienteComponent } from './PacienteView/home-paciente/home-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    CamaComponent,
    NavbarAdminComponent,
    EquipoComponent,
    PersonalComponent,
    SalonesComponent,
    ProcedimientosComponent,
    AdminHomeComponent,
    HistorialComponent,
    PacienteComponent,
    NavbarDoctorComponent,
    HomeDoctorComponent,
    AgregarComponent,
    ReservacionComponent,
    NavbarPacienteComponent,
    HomePacienteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
