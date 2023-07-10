import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})

export class SchedulesComponent implements OnInit {
  isLoadingRecordDetailsBusy: boolean = false;
  areDetailsVisible: boolean = false;
  editSchedButton: boolean = false;
  schedEditable: string = 'schedUneditable';
  sched1expand: string = 'sched1expand';
  sched1expandbool: boolean = true;
  sched2expand: string = 'sched2retract';
  sched1length: string = 'sched1expand';
  sched2show: string = 'sched2hide';
  sched3show: string = 'sched3hide';
  sched4show: string = 'sched4hide';
  sched2header: string = 'Schedule Details';
  showpatientlist: boolean = true;
  location_coordinate: string = '';
  showMap: string = 'showMap';
  empty_sched: any = {sched_id: null, sched_date: null, patient_id: null, patient_name: null, sched_type: null, location: null, destination: null, status: null, last_modified: null, rowclass: ''};
  temp_sched: any = structuredClone(this.empty_sched);
  slctd_sched: any = {sched_id: 0, sched_date: "0001-01-01T00:00", patient_id: 0, patient_name: "Patient XX", sched_type: "Follow-up", location: "XXXXXXXX", destination: "Destination B", status: "Confirmed", last_modified: "0001-01-01T00:00"};
  sched_data: any = [
    /*{sched_id: 0, sched_date: "0001-01-01T00:00", patient_id: 0, patient_name: "Patient XX", sched_type: "Follow-up", location: "XXXXXXXX", destination: "Destination B", status: "Picking Up", last_modified: "0001-01-01T00:00", rowclass: '', filtered: false},
    {sched_id: 1, sched_date: "0001-01-01T00:00", patient_id: 0, patient_name: "Patient XY", sched_type: "Initial", location: "XXXXXXXX", destination: "Destination A", status: "New", last_modified: "0001-01-01T00:00", rowclass: '', filtered: false},
    {sched_id: 2, sched_date: "0001-01-01T00:00", patient_id: 0, patient_name: "Patient YX", sched_type: "Pre-EUO", location: "XXXXXXXX", destination: "Destination A", status: "Reached Dropoff", last_modified: "0001-01-01T00:00", rowclass: '', filtered: false},
    {sched_id: 3, sched_date: "0001-01-01T00:00", patient_id: 0, patient_name: "Patient YY", sched_type: "EUO", location: "XXXXXXXX", destination: "Destination A", status: "Cancelled", last_modified: "0001-01-01T00:00", rowclass: '', filtered: false}*/
  ];
  sched_types: string[] = [
    'Initial',
    'Follow Up',
    'IME',
    'Pre euo',
    'Euo'
  ];
  sched_statuses: string[] = [
    'NEW',
    'ACCEPTED',
    'PICKING UP',
    'REACHED PICKUP',
    'STARTED RIDE',
    'REACHED_DROPOFF',
    'CANCELLED',
    'EXPIRED'
  ];
  schedcols: any = [
    {colid: 'sched_date', colname: 'Schedule', colclass: 'impcol', sortable: true, sortorder: 'down', filter: 'filter-text', colfilters: ''},
    {colid: 'patient_name', colname: 'Patient', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'sched_type', colname: 'Type', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'location', colname: 'Location', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'destination', colname: 'Destination', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'status', colname: 'Status', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'last_modified', colname: 'Last Modified', colclass: 'unimpcol', sortable: true, sortorder: 'down', filter: 'filter-text', colfilters: ''}
  ];
  scheddetails: any = [
    {colid: 'sched_id', labelname: 'Schedule ID', fieldtype: 'text', editable: true},
    {colid: 'sched_date', labelname: 'Schedule Date', fieldtype: 'text', editable: true},
    {colid: 'patient_id', labelname: 'Patient Date', fieldtype: 'text', editable: true},
    {colid: 'patient_name', labelname: 'Patient Name', fieldtype: 'text', editable: true},
    {colid: 'sched_type', labelname: 'Schedule Type', fieldtype: 'text', editable: true},
    {colid: 'location', labelname: 'Location', fieldtype: 'text', editable: true},
    {colid: 'destination', labelname: 'Destination', fieldtype: 'text', editable: true},
    {colid: 'status', labelname: 'status', fieldtype: 'text', editable: true},
    {colid: 'last_modified', labelname: 'last_modified', fieldtype: 'text', editable: true}
  ];
  patientcols: any = [
    {colid: 'patient_id', colname: 'Patient ID', colclass: '', sortable: true, sortorder: 'down', filter: 'filter-text', colfilters: ''},
    {colid: 'patient_fname', colname: 'First Name', colclass: '', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'patient_mname', colname: 'Middle Name', colclass: '', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''},
    {colid: 'patient_lname', colname: 'Last Name', colclass: '', sortable: true, sortorder: 'up', filter: 'filter-text', colfilters: ''}
  ];
  patient_data: any = [
    /*{patient_id: 'XXX', patient_fname: 'AAA', patient_lname: 'CCC', patient_mname: 'BBB',  patient_address: '', patient_email: '', patient_city: '', patient_state: '', patient_zip: '', patient_phone: '', filtered: false},
    {patient_id: 'XXY', patient_fname: 'DDD', patient_lname: 'FFF', patient_mname: 'EEE',  patient_address: '', patient_email: '', patient_city: '', patient_state: '', patient_zip: '', patient_phone: '', filtered: false},
    {patient_id: 'XXZ', patient_fname: 'GGG', patient_lname: 'III', patient_mname: 'HHH',  patient_address: '', patient_email: '', patient_city: '', patient_state: '', patient_zip: '', patient_phone: '', filtered: false}*/
  ];
  temp_patient: any = { patient_id: 0, doctor_id: null, patient_fname: '', patient_lname: '', patient_mname: '', patient_address: '', patient_email: '', patient_city: '', patient_state: '', patient_zip: '', patient_phone: '', filtered: false };
  blank_patient: any = { patient_id: 0, doctor_id: null, patient_fname: '', patient_lname: '', patient_mname: '', patient_address: '', patient_email: '', patient_city: '', patient_state: '', patient_zip: '', patient_phone: '', filtered: false };
  patient_fields: any = [
    {field_id: 'patient_id', field_label: 'Patient ID', field_type: 'text', field_edit: false},
    {field_id: 'patient_fname', field_label: 'First Name', field_type: 'text', field_edit: true},
    {field_id: 'patient_lname', field_label: 'Last Name', field_type: 'text', field_edit: true},
    {field_id: 'patient_mname', field_label: 'Middle Name', field_type: 'text', field_edit: true},
    {field_id: 'patient_sex', field_label: 'Sex', field_type: 'radio', field_edit: true},
    {field_id: 'patient_bdate', field_label: 'Birthdate', field_type: 'date', field_edit: true},
    {field_id: 'patient_address', field_label: 'Address', field_type: 'textarea', field_edit: true},
    {field_id: 'patient_city', field_label: 'City', field_type: 'text', field_edit: true},
    {field_id: 'patient_state', field_label: 'State', field_type: 'text', field_edit: true},
    {field_id: 'patient_zip', field_label: 'Zip', field_type: 'text', field_edit: true},
    {field_id: 'patient_phone', field_label: 'Phone Number', field_type: 'text', field_edit: true},
    {field_id: 'patient_email', field_label: 'Email', field_type: 'email', field_edit: true}
  ];

  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
    this._velo.getSchedules().subscribe(
      res => {
        this.sched_data = res;
        console.log(this.sched_data);
      },
      err => console.log(err)
    );
    this._velo.getPatients().subscribe(
      res => {
        this.patient_data = res;
        console.log(this.patient_data);
      },
      err => console.log(err)
    );
  }

  saveNewPatient() {
    let newpatient = {
      patient_id: null,
      doctor_id: null,
      patient_doctor: "",
      patient_fname: this.temp_patient.patient_fname,
      patient_mname: this.temp_patient.patient_mname,
      patient_lname: this.temp_patient.patient_lname,
      patient_address: this.temp_patient.patient_address,
      patient_coordinates: null,
      patient_city: this.temp_patient.patient_city,
      patient_state: this.temp_patient.patient_state,
      patient_zip: this.temp_patient.patient_zip,
      patient_bdate: this.temp_patient.patient_bdate,
      patient_sex: this.temp_patient.patient_sex,
      patient_phone: this.temp_patient.patient_phone,
      patient_email: this.temp_patient.patient_email
    };
    this._velo.addPatient(newpatient).subscribe(
      res => {
        this.temp_patient.patient_id = res;
        console.log(this.temp_patient);
      },
      err => console.log(err)
    );
    this._velo.getPatients().subscribe(
      res => {
        this.patient_data = res;
        console.log(this.patient_data);
      },
      err => console.log(err)
    );
    this.closePatientForm();
  }

  retractSched1(){
    this.sched1expand = 'sched1retract';
    this.sched1expandbool = false;
    this.sched2expand = 'sched2expand';
  }

  onShowDetails(s_sched: any) {
    // this.sched3show = 'sched3hide';
    // this.sched1length = (this.sched2show==='sched2hide' && this.sched3show==='sched3hide')?'sched1retract':'sched1expand';
    // this.sched2show = this.sched2show==='sched2hide'?'sched2show':'sched2hide';
    this.retractSched1();
    this.sched2header = 'Schedule Details';
    this.showMap = 'showmap';
    this.slctd_sched = s_sched;
    for(let sd of this.scheddetails){
      this.temp_sched[sd.colid] = this.slctd_sched[sd.colid];
    }
  }

  onNewSchedule() {
    // this.sched2show = 'sched2hide';
    // this.sched1length = (this.sched2show==='sched2hide' && this.sched3show==='sched3hide')?'sched1retract':'sched1expand';
    // this.sched3show = this.sched3show==='sched3hide'?'sched3show':'sched3hide';
    this.retractSched1();
      this.schedEditable = 'schedEditable';
    this.sched2header = 'Add Schedule';
    // this.showMap = 'hidemap';
    this.temp_sched = structuredClone(this.empty_sched);
    this.temp_sched.status = 'New';
    this.editSchedButton = true;
  }

  onEditSchedule(edit_action: string){
    if(this.schedEditable === 'schedEditable'){
      this.schedEditable = 'schedUneditable';
      this.sched2header = 'Schedule Details';
    }else{
      this.schedEditable = 'schedEditable';
      this.sched2header = 'Edit Schedule';
    }
    switch(edit_action){
      case 'edit':
        break;
      case 'save':
        if(!this.temp_sched.sched_id){
          let tempid = 0;
          for(let sdat of this.sched_data){
            if(sdat.sched_id > tempid){
              tempid = sdat.sched_id;
            }
          }
          tempid++;
          this.temp_sched.sched_id = tempid;
          this.slctd_sched = structuredClone(this.temp_sched);
          this.sched_data.push(this.slctd_sched);
        }else{
          for(let sd of this.scheddetails){
            this.slctd_sched[sd.colid] = this.temp_sched[sd.colid];
          }
        }
        break;
      case 'cancel':
        for(let sd of this.scheddetails){
          this.temp_sched[sd.colid] = this.slctd_sched[sd.colid];
        }
        break;
    }
    this.editSchedButton = !this.editSchedButton;
  }
  
  onListPatient(){
    this.sched3show = this.sched3show==='sched3hide'?'sched3show':'sched3hide';
    this.sched4show = 'sched4hide';
  }

  filterScheds(){
    for(let sd of this.sched_data){
      let sdfiltered = false;
      for(let sc of this.schedcols){
        if(sc.colfilters.length > 0 && !sd[sc.colid].toLowerCase().includes(sc.colfilters.toLowerCase())){
          sdfiltered = true;
          break;
        }
      }
      sd.filtered = sdfiltered;
    }
  }

  filterPatients(){
    for(let pd of this.patient_data){
      let pdfiltered = false;
      for(let pc of this.patientcols){
        if(pc.colfilters.length > 0 && !pd[pc.colid].toLowerCase().includes(pc.colfilters.toLowerCase())){
          pdfiltered = true;
          break;
        }
      }
      pd.filtered = pdfiltered;
    }
  }

  sortScheds(sortCol: string, sortOrd: string){
    this.sched_data.sort((a: any, b: any) => {
      if(isNaN(a) || isNaN(b)){
        let sa = a[sortCol].toLowerCase(),
            sb = b[sortCol].toLowerCase();
        if(sa > sb){
          return sortOrd==="up"?-1:1;
        }
        if(sb > sa){
          return sortOrd==="up"?1:-1;
        }
        return 0;
      }else{
        return (a[sortCol] - b[sortCol]) * (sortOrd==="up"?1:-1);
      }

    });
    this.schedcols.find((schedcol : any) => schedcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  sortPatients(sortCol: string, sortOrd: string){
    this.patient_data.sort((a: any, b: any) => {
      if(isNaN(a) || isNaN(b)){
        let pa = a[sortCol].toLowerCase(),
            pb = b[sortCol].toLowerCase();
        if(pa > pb){
          return sortOrd==="up"?-1:1;
        }
        if(pb > pa){
          return sortOrd==="up"?1:-1;
        }
        return 0;
      }else{
        return (a[sortCol] - b[sortCol]) * (sortOrd==="up"?1:-1);
      }

    });
    this.patientcols.find((pcol : any) => pcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  onShowMap(){
    this.sched4show = this.sched4show==='sched4hide'?'sched4show':'sched4hide';
    this.sched3show = 'sched3hide';
  }

  choosePatient(){
    let patientform: any = document.getElementById("patientform");
    patientform.showModal();
  }

  closePatientForm(){
    let patientform: any = document.getElementById("patientform");
    patientform.close();
  }

  addPatientForm() {
    this.temp_patient = structuredClone(this.blank_patient);
    this.showpatientlist = !this.showpatientlist;
  }

  scheduleToggle(){
    let prevactive = this.sched_data.find((sd: any) => sd.rowclass.toLowerCase().includes('table-active'));
    if(prevactive){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
    }
    this.sched1expand = 'sched1expand';
    this.sched1expandbool = true;
    this.sched2expand = 'sched2retract';
  }

}

