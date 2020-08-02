import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PacienteService} from '../../Connections/PacienteService';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  pacienteForms: FormArray = this.fb.array([]);
  notification = null;
  medicos = [];
  counter = 0;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.getPersonal().subscribe(res => this.medicos = res as []);
    this.pacienteService.getpaciente().subscribe(
      res => {
        if (res === []) {
          this.addpaciente();
        }
        else{
          (res as []).forEach((paciente: any) => {
            this.counter = this.counter + 15;
            this.pacienteForms.push(this.fb.group({
              dataID : [1],
              cedula : [paciente.cedula, Validators.required],
              nombre: [paciente.nombre],
              apellido: [paciente.apellido],
              telefono: [paciente.telefono],
              direccion: [paciente.direccion],
              nacimiento: [new Date(paciente.nacimiento).toISOString().split('T')[0]],
              medico: [paciente.medico],
            }));
          });
        }
      }
    );
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
