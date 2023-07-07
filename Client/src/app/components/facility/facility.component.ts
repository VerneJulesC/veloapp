import { Component, OnInit } from '@angular/core';
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facdetails: any = [
    {colid: 'facility_id', labelname: 'Facility ID', fieldtype: 'text', editable: false},
    {colid: 'facility_name', labelname: 'Facility Name', fieldtype: 'text', editable: true},
    {colid: 'facility_doctor_id', labelname: 'Doctor ID', fieldtype: 'text', editable: true},
    {colid: 'facility_doctor', labelname: 'Doctor', fieldtype: 'text', editable: true},
    {colid: 'facility_address', labelname: 'Address', fieldtype: 'textarea', editable: true},
    {colid: 'facility_coordinates', labelname: 'Coordinates', fieldtype: 'text', editable: true},
    {colid: 'facility_city', labelname: 'City', fieldtype: 'text', editable: true},
    {colid: 'facility_state', labelname: 'State', fieldtype: 'text', editable: true},
    {colid: 'facility_zip', labelname: 'ZIP', fieldtype: 'text', editable: true},
    {colid: 'facility_ein', labelname: 'EIN', fieldtype: 'text', editable: true},
    {colid: 'facility_tin', labelname: 'Tax ID', fieldtype: 'text', editable: true},
    {colid: 'facility_ssn', labelname: 'SSN', fieldtype: 'text', editable: true},
    {colid: 'facility_npi', labelname: 'NPI', fieldtype: 'text', editable: true},
    {colid: 'facility_license', labelname: 'License Number', fieldtype: 'text', editable: true},
    {colid: 'facility_fax', labelname: 'Fax Number', fieldtype: 'text', editable: true},
    {colid: 'facility_email', labelname: 'Email Address', fieldtype: 'text', editable: true},
    {colid: 'facility_phone', labelname: 'Phone Number', fieldtype: 'text', editable: true}
  ];
  
  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
  }

}
