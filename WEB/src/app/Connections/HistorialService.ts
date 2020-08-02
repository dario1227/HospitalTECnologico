
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }

  posthistorial(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/historial', formData);
  }
  puthistorial(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/historial/' + formData.historialid, formData);
  }
  deletehistorial(cedula) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/historial/' + cedula);
  }
  gethistorial(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/historial');
  }
  getprocedimiento(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/procedimiento');
  }
  getpaciente(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/pacientes');
  }
}

