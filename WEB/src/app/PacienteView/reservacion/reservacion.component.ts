import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReservacionService} from '../../Connections/ReservacionService';
import {cedulainscrita} from '../agregar/agregar.component';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  reservacionForms: FormArray = this.fb.array([]);
  notification = null;
  camas = [];
  pacientes = [];
  procedimientos = [];
  counter = 0;

  constructor(private fb: FormBuilder, private reservacionService: ReservacionService) {
  }

  ngOnInit(): void {
    this.reservacionService.getprocedimientos().subscribe(res => this.procedimientos = res as []);
    this.reservacionService.getcamas().subscribe(res => this.camas = res as []);
    this.reservacionService.getpaciente().subscribe(res => this.pacientes = res as []);
    this.reservacionService.getreservacion().subscribe(
      res => {
        if (res === []) {
          this.addreservacion();
        } else {
          (res as []).forEach((reservacion: any) => {
            this.counter = this.counter + 15;
            if(cedulainscrita==reservacion.paciente) {
              this.reservacionForms.push(this.fb.group({
                dataID: [1],
                reservacionid: [reservacion.reservacionid, Validators.required],
                procedimiento: [reservacion.procedimiento],
                fechaingreso: [new Date(reservacion.fechaingreso).toISOString().split('T')[0]],
                fechasalida: [new Date(reservacion.fechasalida).toISOString().split('T')[0]],
                paciente: [reservacion.paciente],
                cama: [reservacion.cama],
              }));
            }
          });
        }
      }
    );
  }
  addreservacion(){
    this.counter = this.counter + 1;
    this.reservacionForms.push(this.fb.group({
      dataID : [0],
      reservacionid: ['RV' + this.counter.toString(), Validators.required],
      procedimiento: [''],
      fechaingreso: [''],
      fechasalida: [''],
      paciente: [cedulainscrita],
      cama: [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.reservacionService.postreservacion(fg.value).subscribe(
      );
    }
    else{
      this.reservacionService.putreservacion(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(cedula, i){
    this.reservacionService.deletereservacion(cedula).subscribe(
      res => {
        this.reservacionForms.removeAt(i);
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
