import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Procedimientos} from '../../Connections/Procedimientos';
@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {
  ProcedimientoForms: FormArray = this.fb.array([]);
  notification = null;
  counter = 0;

  constructor(private fb: FormBuilder, private ProcedimientoService: Procedimientos) { }

  ngOnInit(): void {
    this.ProcedimientoService.getProcedimiento().subscribe(
      res => {
        if (res === []) {
          this.addProcedimiento();
        }
        else{
          (res as []).forEach((procedimiento: any) => {
            this.counter = this.counter + 15;
            this.ProcedimientoForms.push(this.fb.group({
              dataID : [1],
              procedimientoid : [procedimiento.procedimientoid, Validators.required],
              nombre: [procedimiento.nombre],
              recuperacion: [procedimiento.recuperacion],
            }));
          });
        }
      }
    );
  }
  addProcedimiento(){
    this.counter = this.counter + 1;
    this.ProcedimientoForms.push(this.fb.group({
      dataID : [0],
      procedimientoid : ['PD' + this.counter.toString(), Validators.required],
      nombre: [''],
      recuperacion: [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.ProcedimientoService.postProcedimiento(fg.value).subscribe(
      );
    }
    else{
      this.ProcedimientoService.putProcedimiento(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.ProcedimientoService.deletePeocedimiento(Id).subscribe(
      res => {
        this.ProcedimientoForms.removeAt(i);
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
