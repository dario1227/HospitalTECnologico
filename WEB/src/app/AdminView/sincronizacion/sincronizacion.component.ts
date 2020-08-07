import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PacienteService} from '../../Connections/PacienteService';

@Component({
  selector: 'app-sincronizacion',
  templateUrl: './sincronizacion.component.html',
  styleUrls: ['./sincronizacion.component.css']
})
export class sincronizacionComponent implements OnInit {
  PacienteForms: FormArray = this.fb.array([]);
  medicos = [];
  notification = null;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private PacienteService: PacienteService) { }

  ngOnInit(): void {
    this.PacienteService.getPersonal().subscribe(res => this.medicos = res as []);
    this.PacienteService.getpacienteCoTEC().subscribe(
      res => {
        if (res === []) {
          this.addPaciente();
        }
        else{
          (res as []).forEach((paciente: any) => {
            this.PacienteForms.push(this.fb.group({
              dataID : [0],
              cedula: [paciente.cedula.toString()],
              nombre : [paciente.nombre],
              apellido : [paciente.apellido],
              telefono: [''],
              direccion : ['San Jose'],
              nacimiento: [new Date()],
              medico: ['778855256'],
              tratamientos:[''],
              patologias:['']
            }));
          });
        }
      }
    );
  }
  addPaciente(){
    this.PacienteForms.push(this.fb.group({
      dataID : [0],
      cedula : ['', Validators.required],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      nacimiento: [''],
      medico: [''],
      tratamientos:[''],
      patologias:['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.PacienteService.postpaciente(fg.value).subscribe(
        (res: any) => {
        }
      );
    }
    else{
      this.PacienteService.putpaciente(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  RecordAll(){
    var data = this.PacienteForms.controls;
    var lenght = data.length;
    var counter = 0;
    this.showNotification('insert');
    while(counter<lenght){
      // @ts-ignore
      this.recordSubmit(data[counter]);
      counter++;
    }


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
