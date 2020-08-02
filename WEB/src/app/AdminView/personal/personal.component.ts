import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonalService} from '../../Connections/PersonalService';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForms: FormArray = this.fb.array([]);
  notification = null;
  counter = 0;
  constructor(private fb: FormBuilder, private personalService: PersonalService) { }

  ngOnInit(): void {
    this.personalService.getPersonal().subscribe(
      res => {
        if (res === []) {
          this.addpersonal();
        }
        else{
          (res as []).forEach((personal: any) => {
            this.counter = this.counter + 15;
            this.personalForms.push(this.fb.group({
              dataID : [1],
              cedula : [personal.cedula, Validators.required],
              nombre: [personal.nombre],
              apellido: [personal.apellido],
              telefono: [personal.telefono],
              direccion: [personal.direccion],
              fechaingreso: [new Date(personal.fechaingreso).toISOString().split('T')[0]],
              nacimiento: [new Date(personal.nacimiento).toISOString().split('T')[0]],
              cargo: [personal.cargo],

            }));
          });
        }
      }
    );
  }
  addpersonal(){
    this.counter = this.counter + 1;
    this.personalForms.push(this.fb.group({
      dataID : [0],
      cedula : ['', Validators.required],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      fechaingreso: [''],
      nacimiento: [''],
      cargo: [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.personalService.postPersonal(fg.value).subscribe(
      );
    }
    else{
      this.personalService.putPersonal(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(cedula, i){
    this.personalService.deletePersonal(cedula).subscribe(
      res => {
        this.personalForms.removeAt(i);
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
