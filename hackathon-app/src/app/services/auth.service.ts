import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn=false;
  // Ensure the URL matches your Flask server
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.baseUrl}/login`, payload);
  }

  register(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(`${this.baseUrl}/register`, payload);
  }

  isLoggedIn():boolean{
    return this.loggedIn;
  }

  setLoggedIn(status:boolean):void{
    this.loggedIn=status;
  }

  logout():void{
    this.loggedIn=false;
  }
}
