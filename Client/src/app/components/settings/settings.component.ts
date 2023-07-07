import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  setdetails: any = [
    {colid: 'user_id', labelname: 'User ID', fieldtype: 'text', editable: false},
    {colid: 'username', labelname: 'Username', fieldtype: 'text', editable: true},
    {colid: 'oldpassword', labelname: 'Old Password', fieldtype: 'text', editable: true},
    {colid: 'newpassword', labelname: 'New Password', fieldtype: 'text', editable: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
