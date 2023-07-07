import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeloService {

  private _schedulesURL = "http://localhost:5000/api/schedules";
  private _doctorsURL = "http://localhost:5000/api/doctors";
  private _newDoctorURL = "http://localhost:5000/api/newDoctor";
  private _facilitiesURL = "http://localhost:5000/api/facilities";
  private _patientsURL = "http://localhost:5000/api/patients";
  private _rolesURL = "http://localhost:5000/api/roles";
  private _usersURL = "http://localhost:5000/api/users";
  private _createUserURL = "http://localhost:5000/api/createUser";
  private _verifyLoginURL = "http://localhost:5000/api/verifyLogin";
  private _checkLoginURL = "http://localhost:5000/api/checkLogin";
  private _updateDoctorURL = "http://localhost:5000/api/updateDoctor";
  private _addFacilityURL = "http://localhost:5000/api/addFacility";
  private _updateFacilityURL = "http://localhost:5000/api/updateFacility";
  private _addPatientURL = "http://localhost:5000/api/addPatient";
  private _updatePatientURL = "http://localhost:5000/api/updatePatient";
  private _addScheduleURL = "http://localhost:5000/api/addSchedule";
  private _updateScheduleURL = "http://localhost:5000/api/updateSchedule";

  constructor(private http: HttpClient) { }

  getSchedules(){
    return this.http.get<any>(this._schedulesURL);
  }
  getDoctors(){
    return this.http.get<any>(this._doctorsURL);
  }
  newDoctor(doctor: any){
    return this.http.post<any>(this._newDoctorURL, doctor);
  }
  getFacilities(){
    return this.http.get<any>(this._facilitiesURL);
  }
  getPatients(){
    return this.http.get<any>(this._patientsURL);
  }
  updateDoctor(updateDoctor: any){
    return this.http.post<any>(this._updateDoctorURL, updateDoctor);
  }
  addFacility(addFacility: any){
    return this.http.post<any>(this._addFacilityURL, addFacility);
  }
  updateFacility(updateFacility: any){
    return this.http.post<any>(this._updateFacilityURL, updateFacility);
  }
  addPatient(addPatient: any){
    return this.http.post<any>(this._addPatientURL, addPatient);
  }
  updatePatient(updatePatient: any){
    return this.http.post<any>(this._updatePatientURL, updatePatient);
  }
  addSchedule(addSchedule: any){
    return this.http.post<any>(this._addScheduleURL, addSchedule);
  }
  updateSchedule(updateSchedule: any){
    return this.http.post<any>(this._updateScheduleURL, updateSchedule);
  }

}
