import { Component, OnInit } from '@angular/core';
import {HistorialService} from '../../Connections/HistorialService';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {cedulainscrita} from '../agregar/agregar.component';

@Component({
  selector: 'app-historial-personal',
  templateUrl: './historial-personal.component.html',
  styleUrls: ['./historial-personal.component.css']
})
export class HistorialPersonalComponent implements OnInit {
  historialForms: FormArray = this.fb.array([]);
  notification = null;
  pacientes = [];
  procedimientos = [];
  counter = 0;
  constructor(private fb: FormBuilder, private historialService: HistorialService) {}

  ngOnInit(): void {
    this.historialService.getprocedimiento().subscribe(res => this.procedimientos = res as []);
    this.historialService.getpaciente().subscribe(res => this.pacientes = res as []);
    this.historialService.gethistorial().subscribe(
      res => {
        if (res === []) {
          this.addhistorial();
        } else {
          (res as []).forEach((historial: any) => {
            this.counter = this.counter + 15;
            if(cedulainscrita==historial.paciente) {
              this.historialForms.push(this.fb.group({
                dataID: [1],
                historialid: [historial.historialid, Validators.required],
                procedimiento: [historial.procedimiento],
                fecharealizado: [new Date(historial.fecharealizado).toISOString().split('T')[0]],
                paciente: [historial.paciente],
                tratamiento: [historial.tratamiento],
                patologia: [historial.patologia],
              }));
            }
          });
        }
      }
    );
  }
  addhistorial(){
    this.counter = this.counter + 1;
    this.historialForms.push(this.fb.group({
      dataID : [0],
      historialid: ['HC' + this.counter.toString(), Validators.required],
      procedimiento: [''],
      fecharealizado: [''],
      paciente: [cedulainscrita],
      tratamiento: [''],
      patologia: [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.historialService.posthistorial(fg.value).subscribe(
      );
    }
    else{
      this.historialService.puthistorial(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(id, i){
    this.historialService.deletehistorial(id).subscribe(
      res => {
        this.historialForms.removeAt(i);
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
