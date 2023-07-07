import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.pageslist = this.allpageslist.filter((pagelist:any) => pagelist.roles.some((urole:string) => this.userRole.includes(urole)));
    console.log("roles: "+this.userRole);
  }

  @Input() userRole: string[] = [];
  @Output() messageEvent = new EventEmitter<string>();

  pageslistfilter: any = [
    {inmenu:true}
  ];
  allpageslist: any = [
    {page_id: "schedules", page_name: "Schedules", inmenu: true, page_icon: "bi-car-front", activepage: "active", roles: ["doctor","admin"]},
    {page_id: "doctors", page_name: "Doctors", inmenu: true, page_icon: "bi-heart-pulse", activepage: "", roles: ["admin"]},
    {page_id: "doctor", page_name: "Doctor", inmenu: true, page_icon: "bi-heart-pulse", activepage: "", roles: ["doctor"]},
    {page_id: "facilities", page_name: "Facilities", inmenu: true, page_icon: "bi-hospital", activepage: "", roles: ["admin"]},
    {page_id: "facility", page_name: "Facility", inmenu: true, page_icon: "bi-hospital", activepage: "", roles: ["doctor"]},
    {page_id: "patients", page_name: "Patients", inmenu: true, page_icon: "bi-person-heart", activepage: "", roles: ["doctor","admin"]},
    {page_id: "users", page_name: "Users", inmenu: false, page_icon: "bi-person-fill-gear", activepage: "", roles: ["admin"]}
    // {page_id: "usersettings", page_name: "User Settings", inmenu: false, page_icon: ""},
    // {page_id: "loggedout", page_name: "Logged Out", inmenu: false, page_icon: ""}
  ];
  pageslist: any = [];

  goToPage(page_id: string){
    for(let npage of this.pageslist){
      npage.activepage = (npage.page_id === page_id)?"active":"";
    }
    this.messageEvent.emit(page_id);
  }

}
