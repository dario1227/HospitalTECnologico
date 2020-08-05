import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(private http: HttpClient) { }

  postevaluacion(formData) {
    return this.http.post(' http://localhost:5200/' + 'MongoDB', formData);
  }
  getevaluacion(){
    return this.http.get('http://localhost:5200/' + 'MongoDB');
  }
}

