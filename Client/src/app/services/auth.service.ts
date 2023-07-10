import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginURL = "./api/login";
  private _usersURL = "./api/user";
  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post<any>(this._usersURL, user);
  }

  verifyLogin(user: any) {
    return this.http.post<any>(this._loginURL, user);
  }

  verifyLoggedIn(user: any){
    return this.http.post<any>(this._loginURL+"/"+ user.username, user);
  }

  getUsers() {
    return this.http.get<any>(this._usersURL);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUsername(){
    return localStorage.getItem('username');
  }

  getRToken() {
    return localStorage.getItem('rtoken');
  }
  
}
