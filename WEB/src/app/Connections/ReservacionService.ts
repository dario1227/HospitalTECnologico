
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  constructor(private http: HttpClient) { }

  postreservacion(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/reservacion', formData);
  }
  putreservacion(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/reservacion/' + formData.reservacionid, formData);
  }
  deletereservacion(id) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/reservacion/' + id);
  }
  getreservacion(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/reservacion');
  }
  getcamas(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/camas');
  }
  getpaciente(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/pacientes');
  }
  getprocedimientos(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/procedimiento');
  }
}

