import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EvaluacionService} from '../../Connections/EvaluacionService';
import { Router } from '@angular/router';
import {cedulainscrita} from '../agregar/agregar.component';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {
  evaluacionForms: FormArray = this.fb.array([]);
  notification = null;

  constructor(private fb: FormBuilder, private evaluacionService: EvaluacionService, private router: Router) { }

  ngOnInit(): void {
    this.addevaluacion();
  }
  addevaluacion(){
    this.evaluacionForms.push(this.fb.group({
      dataID : [0],
      cedula : [cedulainscrita],
      higiene: [0],
      puntualidad: [0],
      trato: [0],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.evaluacionService.postevaluacion(fg.value).subscribe(
      );
    }
    this.router.navigate(['/Hospitalevaluacion/PerfilView']);
  }


  showNotification(category){
    switch (category) {
      case 'insert':
        this.notification = {class: 'text-success', message: 'Enviado'};
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
