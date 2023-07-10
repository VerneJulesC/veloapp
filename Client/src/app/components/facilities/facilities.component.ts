import { Component, OnInit } from '@angular/core';
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  fac1expand: string = 'fac1expand';
  fac2expand: string = 'fac2retract';
  editFacButton: boolean = false;

  fac_data: any = [
    /*{facility_id: 0, facility_name: 'XX', facility_doctor_id: 0, facility_doctor: 'VV', facility_database: 'XY', provider_id: '19', facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_tin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''},
    {facility_id: 1, facility_name: 'XY', facility_doctor_id: 3, facility_doctor: 'VW', facility_database: 'XY', provider_id: '19', facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_tin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''},
    {facility_id: 2, facility_name: 'YX', facility_doctor_id: 2, facility_doctor: 'WW', facility_database: 'XY', provider_id: '19', facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_tin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''},
    {facility_id: 3, facility_name: 'YY', facility_doctor_id: 1, facility_doctor: 'WX', facility_database: 'XY', provider_id: '19', facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_tin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''}*/
  ];
  facilitycols: any = [
    {colid: 'facility_id', colname: 'Facility ID', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'facility_name', colname: 'Facility Name', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'facility_doctor', colname: 'Doctor', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'facility_database', colname: 'Database', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'}
  ];
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

  slctd_fac: any = {facility_id: 0, facility_fname: 'XX', facility_mname: 'W', facility_lname: 'VV', facility_database: 'XY', provider_id: '19', facility_facilities: [], facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_upin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''};
  temp_fac: any = {facility_id: 0, facility_fname: 'XX', facility_mname: 'W', facility_lname: 'VV', facility_database: 'XY', provider_id: '19', facility_facilities: [], facility_address: 'XX', facility_city: 'XX', facility_state: 'XX', facility_zip: 'XX', facility_ein: 'XX', facility_upin: 'XX', facility_ssn: 'XX', facility_npi: 'XX', facility_license: '8765', facility_fax: '098765', facility_email: 'xx@xxxx.xxx', facility_phone: '0987654321', rowclass: ''};
  facEditable: string = 'facUneditable';

  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
    this._velo.getFacilities().subscribe(
      res => {
        this.fac_data = res;
        console.log(this.fac_data);
      },
      err => console.log(err)
    );
  }

  sortfacilities(sortCol: string, sortOrd: string){
    this.fac_data.sort((a: any, b: any) => {
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
    this.facilitycols.find((dcol : any) => dcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  onShowDetails(fac: any){
    let prevactive = this.fac_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(!prevactive){
      fac.rowclass += ' table-active';
    }else if(prevactive.facility_id !== fac.facility_id){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
      fac.rowclass += ' table-active';
    }
    this.slctd_fac = fac;
    this.retractFac1();
  }

  getValByType(inp: any){
    if(Array.isArray(inp)){
      return inp.join(', ');
    }else{
      return inp;
    }
  }

  onAddfacility(){
    this.slctd_fac = {facility_id: null, facility_fname: null, facility_mname: null, facility_lname: null, facility_database: null, provider_id: null, facility_facilities: [], facility_address: null, facility_city: null, facility_state: null, facility_zip: null, facility_ein: null, facility_upin: null, facility_ssn: null, facility_npi: null, facility_license: null, facility_fax: null, facility_email: null, facility_phone: null, rowclass: null}
    for(let dd of this.facdetails){
      this.temp_fac[dd.colid] = null;
    }
    this.facEditable = 'facEditable';
    this.editFacButton = true;
    this.retractFac1();
  }

  onEditfacility(editaction: string){
    if(editaction === 'save'){
      for(let dd of this.facdetails){
        this.slctd_fac[dd.colid] = this.temp_fac[dd.colid];
      }
      if(!this.temp_fac.facility_id){
        let tempid = 0;
        for(let ddat of this.fac_data){
          if(ddat.facility_id > tempid){
            tempid = ddat.facility_id;
          }
        }
        tempid++;
        this.temp_fac.facility_id = tempid;
        this.fac_data.push(structuredClone(this.temp_fac));
      }
    }else{
      for(let dd of this.facdetails){
        this.temp_fac[dd.colid] = this.slctd_fac[dd.colid];
      }
    }
    this.facEditable = (this.facEditable === 'facEditable')?'facUneditable':'facEditable';
    this.editFacButton = !this.editFacButton;
  }

  retractFac1(){
    this.fac1expand = 'fac1retract';
    this.fac2expand = 'fac2expand';
  }

  facilitiesToggle(){
    let prevactive = this.fac_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(prevactive){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
    }
    this.fac1expand = 'fac1expand';
    this.fac2expand = 'fac2retract';
  }
}
