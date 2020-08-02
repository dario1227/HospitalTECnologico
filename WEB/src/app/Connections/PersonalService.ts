
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }

  postPersonal(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/Personal', formData);
  }
  putPersonal(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/Personal/' + formData.cedula, formData);
  }
  deletePersonal(cedula) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/Personal/' + cedula);
  }
  getPersonal(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/Personal');
  }
}

