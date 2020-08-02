import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Procedimientos {

  constructor(private http: HttpClient) { }

  postProcedimiento(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/Procedimiento', formData);
  }
  putProcedimiento(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/Procedimiento/' + formData.procedimientoid, formData);
  }
  deletePeocedimiento(id) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/Procedimiento/' + id);
  }
  getProcedimiento(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/Procedimiento');
  }
}

