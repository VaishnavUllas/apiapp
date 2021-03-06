import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public serverurl="https://jsonplaceholder.typicode.com/todos/1"

  constructor(private http:HttpClient) { }

  getData(){
     return this.http.get(this.serverurl);
  }
}
