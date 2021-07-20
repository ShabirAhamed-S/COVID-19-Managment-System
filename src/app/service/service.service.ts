import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string = 'http://localhost:3000/api'
  
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    console.log('im server')
    return this.http.post(`{baseUrl}/auth_login`, data)
  }
}
