import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  docdetails: any = [
    {colid: 'doctor_id', labelname: 'Doctor ID', fieldtype: 'text', editable: false},
    {colid: 'provider_id', labelname: 'Provider ID', fieldtype: 'text', editable: false},
    {colid: 'doctor_fname', labelname: 'First Name', fieldtype: 'text', editable: true},
    {colid: 'doctor_mname', labelname: 'Middle Name', fieldtype: 'text', editable: true},
    {colid: 'doctor_lname', labelname: 'Last Name', fieldtype: 'text', editable: true},
    {colid: 'doctor_address', labelname: 'Address', fieldtype: 'textarea', editable: true},
    {colid: 'doctor_city', labelname: 'City', fieldtype: 'text', editable: true},
    {colid: 'doctor_state', labelname: 'State', fieldtype: 'text', editable: true},
    {colid: 'doctor_zip', labelname: 'ZIP', fieldtype: 'text', editable: true},
    {colid: 'doctor_ein', labelname: 'EIN', fieldtype: 'text', editable: true},
    {colid: 'doctor_upin', labelname: 'UPIN', fieldtype: 'text', editable: true},
    {colid: 'doctor_ssn', labelname: 'SSN', fieldtype: 'text', editable: true},
    {colid: 'doctor_npi', labelname: 'NPI', fieldtype: 'text', editable: true},
    {colid: 'doctor_license', labelname: 'License Number', fieldtype: 'text', editable: true},
    {colid: 'doctor_fax', labelname: 'Fax Number', fieldtype: 'text', editable: true},
    {colid: 'doctor_email', labelname: 'Email Address', fieldtype: 'text', editable: true},
    {colid: 'doctor_phone', labelname: 'Phone Number', fieldtype: 'text', editable: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
