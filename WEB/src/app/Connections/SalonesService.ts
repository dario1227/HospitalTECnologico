import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalonesService {

  constructor(private http: HttpClient) { }

  postsalon(formData) {
    return this.http.post('http://localhost:5000/' + 'HospitalTECnologico/salones', formData);
  }
  putsalon(formData) {
    return this.http.put('http://localhost:5000/' + 'HospitalTECnologico/salones/' + formData.salonid, formData);
  }
  deletesalon(id) {
    return this.http.delete('http://localhost:5000/' + 'HospitalTECnologico/salones/' + id);
  }
  getsalon(){
    return this.http.get('http://localhost:5000/' + 'HospitalTECnologico/salones');
  }
}

