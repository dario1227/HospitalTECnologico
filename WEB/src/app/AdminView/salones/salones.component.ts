import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SalonesService} from '../../Connections/SalonesService';

@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent implements OnInit {
  salonForms: FormArray = this.fb.array([]);
  notification = null;
  counter = 0;

  constructor(private fb: FormBuilder, private salonService: SalonesService) { }

  ngOnInit(): void {
    this.salonService.getsalon().subscribe(
      res => {
        if (res === []) {
          this.addsalon();
        }
        else{
          (res as []).forEach((salon: any) => {
            this.counter = this.counter + 15;
            this.salonForms.push(this.fb.group({
              dataID : [1],
              salonid : [salon.salonid, Validators.required],
              nombre: [salon.nombre],
              piso: [salon.piso],
              medicina: [salon.medicina],
              capacidad: [salon.capacidad],
            }));
          });
        }
      }
    );
  }
  addsalon(){
    this.counter = this.counter + 1;
    this.salonForms.push(this.fb.group({
      dataID : [0],
      salonid : ['SL' + this.counter.toString(), Validators.required],
      nombre: [''],
      piso: [0],
      medicina: [''],
      capacidad: [0],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.salonService.postsalon(fg.value).subscribe(
      );
    }
    else{
      this.salonService.putsalon(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.salonService.deletesalon(Id).subscribe(
      res => {
        this.salonForms.removeAt(i);
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
