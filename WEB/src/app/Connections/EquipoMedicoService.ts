import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoMedicoService {

  constructor(private http: HttpClient) { }

  postEquipo(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/Equipo', formData);
  }
  putEquipo(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/Equipo/' + formData.equipoid, formData);
  }
  deleteEquipo(id) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/Equipo/' + id);
  }
  getEquipo(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/Equipo');
  }
}

