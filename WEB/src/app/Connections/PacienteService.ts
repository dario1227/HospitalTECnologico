
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  postpaciente(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/Pacientes', formData);
  }
  putpaciente(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/Pacientes/' + formData.cedula, formData);
  }
  deletepaciente(cedula) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/Pacientes/' + cedula);
  }
  getpaciente(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/Pacientes');
  }
  getpacienteCoTEC(){
    return this.http.get('http://localhost:5500/' + 'CoTEC/Pacientes');
  }
  getPersonal(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/Personal');
  }
}

