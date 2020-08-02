import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipoMedicoService} from '../../Connections/EquipoMedicoService';
@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipoForms: FormArray = this.fb.array([]);
  notification = null;
  counter = 0;

  constructor(private fb: FormBuilder, private EquipoService: EquipoMedicoService) { }

  ngOnInit(): void {
    this.EquipoService.getEquipo().subscribe(
      res => {
        if (res === []) {
          this.addEquipo();
        }
        else{
          (res as []).forEach((equipo: any) => {
            this.counter = this.counter + 15;
            this.equipoForms.push(this.fb.group({
              dataID : [1],
              equipoid : [equipo.equipoid, Validators.required],
              nombre: [equipo.nombre],
              proveedor: [equipo.proveedor],
              cantdisponible: [equipo.cantdisponible],
            }));
          });
        }
      }
    );
  }
  addEquipo(){
    this.counter = this.counter + 1;
    this.equipoForms.push(this.fb.group({
      dataID : [0],
      equipoid : ['EQ' + this.counter.toString(), Validators.required],
      nombre: [''],
      proveedor: [''],
      cantdisponible: [0]
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.EquipoService.postEquipo(fg.value).subscribe(
      );
    }
    else{
      this.EquipoService.putEquipo(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.EquipoService.deleteEquipo(Id).subscribe(
      res => {
        this.equipoForms.removeAt(i);
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
