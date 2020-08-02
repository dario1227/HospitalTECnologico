import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CamaService} from '../../Connections/CamaService';
@Component({
  selector: 'app-cama',
  templateUrl: './cama.component.html',
  styleUrls: ['./cama.component.css']
})
export class CamaComponent implements OnInit {
  camaForms: FormArray = this.fb.array([]);
  notification = null;
  counter = 0;
  Salones = [];
  Equipos = [];

  constructor(private fb: FormBuilder, private camaService: CamaService) {
  }

  ngOnInit(): void {
    this.camaService.getequipo().subscribe(res => this.Equipos = res as []);
    this.camaService.getsalon().subscribe(res => this.Salones = res as []);
    this.camaService.getcama().subscribe(
      res => {
        if (res === []) {
          this.addcama();
        } else {
          (res as []).forEach((cama: any) => {
            this.counter = this.counter + 15;
            this.camaForms.push(this.fb.group({
              dataID: [1],
              camaid: [cama.camaid, Validators.required],
              uci: [cama.uci],
              salon: [cama.salon],
              equipomedico: [cama.equipomedico],
            }));
          });
        }
      }
    );
  }

  addcama() {
    this.counter = this.counter + 1;
    this.camaForms.push(this.fb.group({
      dataID: [0],
      camaid: ['CM' + this.counter.toString(), Validators.required],
      uci: [''],
      salon: [''],
      equipomedico: [''],
    }));
  }

  recordSubmit(fg: FormGroup) {
    if (fg.value.dataID === 0) {
      this.showNotification('insert');
      this.camaService.postcama(fg.value).subscribe(
      );
    } else {
      this.camaService.putcama(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }

  onDelete(Id, i) {
    this.camaService.deletecama(Id).subscribe(
      res => {
        this.camaForms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category) {
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
