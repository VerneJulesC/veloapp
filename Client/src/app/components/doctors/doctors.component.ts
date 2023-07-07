import { Component, OnInit } from '@angular/core';
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doc1expand: string = 'doc1expand';
  doc2expand: string = 'doc2retract';
  editDocButton: boolean = false;

  doc_data: any = [
    /*{doctor_id: 0, doctor_fname: 'XX', doctor_mname: 'W', doctor_lname: 'VV', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''},
    {doctor_id: 1, doctor_fname: 'XY', doctor_mname: 'X', doctor_lname: 'VW', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''},
    {doctor_id: 2, doctor_fname: 'YX', doctor_mname: 'Y', doctor_lname: 'WW', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''},
    {doctor_id: 3, doctor_fname: 'YY', doctor_mname: 'Z', doctor_lname: 'WX', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''}*/
  ];
  doctorcols: any = [
    {colid: 'doctor_id', colname: 'Doctor ID', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'provider_id', colname: 'Provider ID', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'doctor_fname', colname: 'First Name', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'doctor_mname', colname: 'Middle Name', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'doctor_lname', colname: 'Last Name', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'doctor_facilities', colname: 'Facilities', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'doctor_database', colname: 'Database', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'}
  ];
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

  slctd_doc: any = {doctor_id: 0, doctor_fname: 'XX', doctor_mname: 'W', doctor_lname: 'VV', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''};
  temp_doc: any = {doctor_id: 0, doctor_fname: 'XX', doctor_mname: 'W', doctor_lname: 'VV', doctor_database: 'XY', provider_id: '19', doctor_facilities: [], doctor_address: 'XX', doctor_city: 'XX', doctor_state: 'XX', doctor_zip: 'XX', doctor_ein: 'XX', doctor_upin: 'XX', doctor_ssn: 'XX', doctor_npi: 'XX', doctor_license: '8765', doctor_fax: '098765', doctor_email: 'xx@xxxx.xxx', doctor_phone: '0987654321', rowclass: ''};
  docEditable: string = 'docUneditable';

  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
    this._velo.getDoctors().subscribe(
      res => {
        this.doc_data = res;
        console.log(this.doc_data);
      },
      err => console.log(err)
    );
  }

  sortDoctors(sortCol: string, sortOrd: string){
    this.doc_data.sort((a: any, b: any) => {
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
    this.doctorcols.find((dcol : any) => dcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  onShowDetails(doc: any){
    let prevactive = this.doc_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(!prevactive){
      doc.rowclass += ' table-active';
    }else if(prevactive.doctor_id !== doc.doctor_id){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
      doc.rowclass += ' table-active';
    }
    this.slctd_doc = doc;
    this.retractDoc1();
  }

  getValByType(inp: any){
    if(Array.isArray(inp)){
      return inp.join(', ');
    }else{
      return inp;
    }
  }

  onAddDoctor(){
    this.slctd_doc = {doctor_id: null, doctor_fname: null, doctor_mname: null, doctor_lname: null, doctor_database: null, provider_id: null, doctor_facilities: [], doctor_address: null, doctor_city: null, doctor_state: null, doctor_zip: null, doctor_ein: null, doctor_upin: null, doctor_ssn: null, doctor_npi: null, doctor_license: null, doctor_fax: null, doctor_email: null, doctor_phone: null, rowclass: null}
    for(let dd of this.docdetails){
      this.temp_doc[dd.colid] = null;
    }
    this.docEditable = 'docEditable';
    this.editDocButton = true;
  }

  onEditDoctor(editaction: string){
    if(editaction === 'save'){
      for(let dd of this.docdetails){
        this.slctd_doc[dd.colid] = this.temp_doc[dd.colid];
      }
      if(!this.temp_doc.doctor_id){
        let tempid = 0;
        for(let ddat of this.doc_data){
          if(ddat.doctor_id > tempid){
            tempid = ddat.doctor_id;
          }
        }
        tempid++;
        this.temp_doc.doctor_id = tempid;
        this.doc_data.push(structuredClone(this.temp_doc));

        this._velo.newDoctor(this.temp_doc);
      }
    }else{
      for(let dd of this.docdetails){
        this.temp_doc[dd.colid] = this.slctd_doc[dd.colid];
      }
    }
    this.docEditable = (this.docEditable === 'docEditable')?'docUneditable':'docEditable';
    this.editDocButton = !this.editDocButton;
  }

  retractDoc1(){
    this.doc1expand = 'doc1retract';
    this.doc2expand = 'doc2expand';
  }

  doctorsToggle(){
    let prevactive = this.doc_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(prevactive){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
    }
    this.doc1expand = 'doc1expand';
    this.doc2expand = 'doc2retract';
  }

}
