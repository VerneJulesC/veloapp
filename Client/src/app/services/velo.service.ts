import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeloService {

  private _schedulesURL = "./api/schedule";
  private _doctorsURL = "./api/doctor";
  private _facilitiesURL = "./api/facility";
  private _patientsURL = "./api/patient";
  private _rolesURL = "./api/role";
  private _usersURL = "./api/user";

  constructor(private http: HttpClient) { }

  getSchedules(){
    return this.http.get<any>(this._schedulesURL);
  }
  getDoctors(){
    return this.http.get<any>(this._doctorsURL);
  }
  newDoctor(doctor: any){
    return this.http.post<any>(this._doctorsURL, doctor);
  }
  getFacilities(){
    return this.http.get<any>(this._facilitiesURL);
  }
  getPatients(){
    return this.http.get<any>(this._patientsURL);
  }
  updateDoctor(updateDoctor: any){
    return this.http.post<any>(this._doctorsURL+"/"+updateDoctor.doctor_id, updateDoctor);
  }
  addFacility(addFacility: any){
    return this.http.post<any>(this._facilitiesURL, addFacility);
  }
  updateFacility(updateFacility: any) {
    return this.http.post<any>(this._facilitiesURL + "/" + updateFacility.facility_id, updateFacility);
  }
  addPatient(addPatient: any){
    return this.http.post<any>(this._patientsURL, addPatient);
  }
  updatePatient(updatePatient: any){
    return this.http.post<any>(this._patientsURL + "/" + updatePatient.patient_id, updatePatient);
  }
  addSchedule(addSchedule: any){
    return this.http.post<any>(this._schedulesURL, addSchedule);
  }
  updateSchedule(updateSchedule: any) {
    return this.http.post<any>(this._schedulesURL + "/" + updateSchedule.sched_id, updateSchedule);
  }

}
