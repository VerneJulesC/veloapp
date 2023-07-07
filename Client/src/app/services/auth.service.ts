import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _createUserUrl = "http://localhost:5000/api/createUser";
  private _verifyLoginUrl = "http://localhost:5000/api/verifyLogin";
  private _checkLoginUrl = "http://localhost:5000/api/checkLogin";
  private _getUsersUrl = "http://localhost:5000/api/users";
  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post<any>(this._createUserUrl, user);
  }

  verifyLogin(user: any){
    console.log('doing something...');
    return this.http.post<any>(this._verifyLoginUrl, user);
  }

  verifyLoggedIn(user: any){
    return this.http.post<any>(this._checkLoginUrl, user);
  }

  getUsers(){
    return this.http.get<any>(this._getUsersUrl);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUsername(){
    return localStorage.getItem('username');
  }
  
}
