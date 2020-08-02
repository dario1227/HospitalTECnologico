
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CamaService {

  constructor(private http: HttpClient) { }

  postcama(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/camas', formData);
  }
  putcama(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/camas/' + formData.camaid, formData);
  }
  deletecama(id) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/camas/' + id);
  }
  getcama(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/camas');
  }
  getsalon(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/salones');
  }
  getequipo(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/equipo');
  }
}

