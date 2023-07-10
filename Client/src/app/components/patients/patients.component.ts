import { Component, OnInit } from '@angular/core';
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  pat1expand: string = 'pat1expand';
  pat2expand: string = 'pat2retract';
  editPatButton: boolean = false;

  pat_data: any = [
    /*{patient_id: 0, doctor_id: 1, patient_doctor: 'X', patient_fname: 'XX', patient_mname: 'W', patient_lname: 'VV', patient_address: 'XX', patient_coordinates: '', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_bdate: 'XX', patient_sex: 'XX', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''},
    {patient_id: 1, doctor_id: 1, patient_doctor: 'X', patient_fname: 'XY', patient_mname: 'X', patient_lname: 'VW', patient_address: 'XX', patient_coordinates: '', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_bdate: 'XX', patient_sex: 'XX', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''},
    {patient_id: 2, doctor_id: 1, patient_doctor: 'X', patient_fname: 'YX', patient_mname: 'Y', patient_lname: 'WW', patient_address: 'XX', patient_coordinates: '', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_bdate: 'XX', patient_sex: 'XX', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''},
    {patient_id: 3, doctor_id: 1, patient_doctor: 'X', patient_fname: 'YY', patient_mname: 'Z', patient_lname: 'WX', patient_address: 'XX', patient_coordinates: '', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_bdate: 'XX', patient_sex: 'XX', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''}*/
  ];
  patientcols: any = [
    {colid: 'patient_id', colname: 'Patient ID', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'patient_doctor', colname: 'Doctor', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'patient_fname', colname: 'First Name', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'patient_mname', colname: 'Middle Name', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'patient_lname', colname: 'Last Name', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'patient_email', colname: 'Email Address', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'}
  ];
  patdetails: any = [
    {colid: 'patient_id', labelname: 'Patient ID', fieldtype: 'text', editable: false},
    {colid: 'doctor_id', labelname: 'Doctor ID', fieldtype: 'text', editable: false},
    {colid: 'patient_doctor', labelname: 'Doctor', fieldtype: 'text', editable: false},
    {colid: 'patient_fname', labelname: 'First Name', fieldtype: 'text', editable: true},
    {colid: 'patient_mname', labelname: 'Middle Name', fieldtype: 'text', editable: true},
    {colid: 'patient_lname', labelname: 'Last Name', fieldtype: 'text', editable: true},
    {colid: 'patient_address', labelname: 'Address', fieldtype: 'textarea', editable: true},
    {colid: 'patient_coordinates', labelname: 'Coordinates', fieldtype: 'text', editable: true},
    {colid: 'patient_city', labelname: 'City', fieldtype: 'text', editable: true},
    {colid: 'patient_state', labelname: 'State', fieldtype: 'text', editable: true},
    {colid: 'patient_zip', labelname: 'ZIP', fieldtype: 'text', editable: true},
    {colid: 'patient_bdate', labelname: 'Birth Date', fieldtype: 'text', editable: true},
    {colid: 'patient_sex', labelname: 'Sex', fieldtype: 'text', editable: true},
    {colid: 'patient_phone', labelname: 'Phone Number', fieldtype: 'text', editable: true},
    {colid: 'patient_email', labelname: 'Email Address', fieldtype: 'text', editable: true}
  ]

  slctd_pat: any = {patient_id: 0, patient_fname: 'XX', patient_mname: 'W', patient_lname: 'VV', patient_database: 'XY', provider_id: '19', patient_facilities: [], patient_address: 'XX', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_ein: 'XX', patient_upin: 'XX', patient_ssn: 'XX', patient_npi: 'XX', patient_license: '8765', patient_fax: '098765', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''};
  temp_pat: any = {patient_id: 0, patient_fname: 'XX', patient_mname: 'W', patient_lname: 'VV', patient_database: 'XY', provider_id: '19', patient_facilities: [], patient_address: 'XX', patient_city: 'XX', patient_state: 'XX', patient_zip: 'XX', patient_ein: 'XX', patient_upin: 'XX', patient_ssn: 'XX', patient_npi: 'XX', patient_license: '8765', patient_fax: '098765', patient_email: 'xx@xxxx.xxx', patient_phone: '0987654321', rowclass: ''};
  patEditable: string = 'patUneditable';

  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
    this._velo.getPatients().subscribe(
      res => {
        this.pat_data = res;
        console.log(this.pat_data);
      },
      err => console.log(err)
    );
  }

  sortPatients(sortCol: string, sortOrd: string){
    this.pat_data.sort((a: any, b: any) => {
      if(isNaN(a) || isNaN(b)){
        let sa = a[sortCol].toLowerCase(),
            sb = b[sortCol].toLowerCase();
        if(sa < sb){
          return sortOrd==="up"?-1:1;
        }
        if(sb < sa){
          return sortOrd==="up"?1:-1;
        }
        return 0;
      }else{
        return (a[sortCol] - b[sortCol]) * (sortOrd==="up"?1:-1);
      }

    });
    this.patientcols.find((dcol : any) => dcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  onShowDetails(pat: any){
    let prevactive = this.pat_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(!prevactive){
      pat.rowclass += ' table-active';
    }else if(prevactive.patient_id !== pat.patient_id){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
      pat.rowclass += ' table-active';
    }
    this.slctd_pat = pat;
    this.retractPat1();
  }

  getValByType(inp: any){
    if(Array.isArray(inp)){
      return inp.join(', ');
    }else{
      return inp;
    }
  }

  onAddPatient(){
    this.slctd_pat = {patient_id: null, patient_fname: null, patient_mname: null, patient_lname: null, patient_database: null, provider_id: null, patient_facilities: [], patient_address: null, patient_city: null, patient_state: null, patient_zip: null, patient_ein: null, patient_upin: null, patient_ssn: null, patient_npi: null, patient_license: null, patient_fax: null, patient_email: null, patient_phone: null, rowclass: null}
    for(let dd of this.patdetails){
      this.temp_pat[dd.colid] = null;
    }
    this.patEditable = 'patEditable';
    this.editPatButton = true;
    this.retractPat1();
  }

  onEditPatient(editaction: string){
    if(editaction === 'save'){
      for(let dd of this.patdetails){
        this.slctd_pat[dd.colid] = this.temp_pat[dd.colid];
      }
      if(!this.temp_pat.patient_id){
        let tempid = 0;
        for(let ddat of this.pat_data){
          if(ddat.patient_id > tempid){
            tempid = ddat.patient_id;
          }
        }
        tempid++;
        this.temp_pat.patient_id = tempid;
        this.pat_data.push(structuredClone(this.temp_pat));
      }
    }else{
      for(let dd of this.patdetails){
        this.temp_pat[dd.colid] = this.slctd_pat[dd.colid];
      }
    }
    this.patEditable = (this.patEditable === 'patEditable')?'patUneditable':'patEditable';
    this.editPatButton = !this.editPatButton;
  }

  retractPat1(){
    this.pat1expand = 'pat1retract';
    this.pat2expand = 'pat2expand';
  }

  patientsToggle(){
    let prevactive = this.pat_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(prevactive){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
    }
    this.pat1expand = 'pat1expand';
    this.pat2expand = 'pat2retract';
  }

}
