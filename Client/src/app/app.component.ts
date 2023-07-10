import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _auth: AuthService){ }

  title: string = 'Velo Health';
  loginuser: any = { username: localStorage.getItem('username'), loggedin: false, roles: [], showlogin: false };
  schedwidth: string = "100%";

  ngOnInit(){
    let user = {
      username: this._auth.getUsername()
    };
    this._auth.verifyLoggedIn(user).subscribe(
      res => {
        console.log(res);
        this.loginuser.loggedin = res.vlogin === "Y";
        this.loginuser.roles = res.roles;
      },
      err => {
        this.loginuser.loggedin = false;
        this.loginuser.showlogin = true;
      }
    );
  }

  loginUser($event: any){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    let luser = {
      username: $event.username,
      password: $event.password
    }
    this._auth.verifyLogin(luser).subscribe(
      res => {
        this.loginuser.username = res.username;
        this.loginuser.loggedin = res.vlogin === "Y";
        this.loginuser.roles = res.roles;
        let rnum: number = 0;
        for (let lur of this.loginuser.roles) {
          if (lur === "admin") {
            rnum++;
          }
          if (lur === "doctor") {
            if (rnum > 0) {
              rnum = 3;
            } else {
              rnum = 2;
            }
          }
        }
        if(this.loginuser.loggedin){
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username);
          localStorage.setItem('rtoken', rnum.toString());
        }
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('rtoken');
            this.loginuser.loggedin = false;
            this.loginuser.showlogin = true;
          }
        }
      }
    );
  }

  logoutUser($event: any){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.loginuser.loggedin = false;
    this.loginuser.showlogin = true;
  }
}
