import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PacienteService} from '../../Connections/PacienteService';
import { Router } from '@angular/router';
export var cedulainscrita = '';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  pacienteForms: FormArray = this.fb.array([]);
  notification = null;
  medicos = [];
  counter = 0;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService, private router: Router) { }

  ngOnInit(): void {
    this.pacienteService.getPersonal().subscribe(res => this.medicos = res as []);
    this.addpaciente();
  }
  addpaciente(){
    this.counter = this.counter + 1;
    this.pacienteForms.push(this.fb.group({
      dataID : [0],
      cedula : ['', Validators.required],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      nacimiento: [''],
      medico: [''],
      patologias:[''],
      tratamientos:['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.pacienteService.postpaciente(fg.value).subscribe(
      );
    }
    else{
      this.pacienteService.putpaciente(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
    cedulainscrita = fg.value.cedula;
    this.router.navigate(['/HospitalPaciente/PerfilView']);
  }
  onDelete(cedula, i){
    this.pacienteService.deletepaciente(cedula).subscribe(
      res => {
        this.pacienteForms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category){
    switch (category) {
      case 'insert':
        this.notification = {class: 'text-success', message: 'Saved'};
        break;
      case 'update':
        this.notification = {class: 'text-primary', message: 'Updated'};
        break;
      case 'delete':
        this.notification = {class: 'text-danger', message: 'Deleted'};
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}
