import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuser: any = { username: null, password: null, loggedin: false, roles: [], showlogin: true };

  constructor() { }

  ngOnInit(): void {
  }

  @Output() loginUser = new EventEmitter<string>();

  submitLogin(){
    this.loginUser.emit(this.loginuser);
  }

}
