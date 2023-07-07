import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user1expand: string = 'user1expand';
  user2expand: string = 'user2retract';
  editUserButton: boolean = false;

  user_data: any = [
    /*{user_id: 1, username: 'admin', password: 'Adm1n!', roles: ['admin'], rowclass: ''},
    {user_id: 2, username: 'doc1', password: 'D0ctor!', roles: ['doctor'], rowclass: ''}*/
  ];
  usercols: any = [
    {colid: 'user_id', colname: 'User ID', colclass: 'unimpcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'username', colname: 'Username', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'},
    {colid: 'roles', colname: 'Roles', colclass: 'impcol', sortable: true, sortorder: 'up', filter: 'filter-text'}
  ];
  userdetails: any = [
    {colid: 'user_id', labelname: 'User ID', fieldtype: 'text', editable: false},
    {colid: 'username', labelname: 'Username', fieldtype: 'text', editable: true},
    {colid: 'roles', labelname: 'Roles', fieldtype: 'checkbox', editable: true}
  ];
  temproles: any = [
    {rolename:"admin", checked: false},
    {rolename:"doctor", checked: false}
  ];

  slctd_user: any = {user_id: 0, username: 'XX', roles: ['doctor'], rowclass: ''};
  temp_user: any = {user_id: 0, username: 'XX', roles: [], rowclass: ''};
  userEditable: string = 'userUneditable';

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.getUsers().subscribe(
      res => {
        this.user_data = res;
        console.log(this.user_data);
      },
      err => console.log(err)
    );
  }

  sortUsers(sortCol: string, sortOrd: string){
    this.user_data.sort((a: any, b: any) => {
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
    this.usercols.find((dcol : any) => dcol.colid === sortCol).sortorder = (sortOrd === "up")?"down":"up";
  }

  onShowDetails(user: any){
    let prevactive = this.user_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(!prevactive){
      user.rowclass += ' table-active';
    }else if(prevactive.user_id !== user.user_id){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
      user.rowclass += ' table-active';
    }
    this.slctd_user = user;
    for(let dd of this.userdetails){
      this.temp_user[dd.colid] = this.slctd_user[dd.colid];
    }
    for(let tr of this.temproles){
      tr.checked = this.temp_user.roles.some((tur:string) => tur===tr.rolename);
    }
    this.retractDoc1();
  }

  getValByType(inp: any){
    if(Array.isArray(inp)){
      return inp.join(', ');
    }else{
      return inp;
    }
  }

  onAddUser(){
    this.slctd_user = {user_id: null, username: null, roles: [], rowclass: null}
    for(let dd of this.userdetails){
      this.temp_user[dd.colid] = dd.colid==="roles"?[]:null;
    }
    for(let tr of this.temproles){
      tr.checked = false;
    }
    this.userEditable = 'userEditable';
    this.editUserButton = true;
    this.retractDoc1();
  }

  onEditUser(editaction: string){
    if(editaction === 'save'){
      for(let dd of this.userdetails){
        this.slctd_user[dd.colid] = this.temp_user[dd.colid];
      }
      if(!this.temp_user.user_id){
        let tempid = 0;
        for(let ddat of this.user_data){
          if(ddat.user_id > tempid){
            tempid = ddat.user_id;
          }
        }
        tempid++;
        this.temp_user.user_id = tempid;
        this.user_data.push(structuredClone(this.temp_user));
        console.log('creating user: '+this.temp_user.username);
        this._auth.createUser(this.temp_user).subscribe(
          res => console.log(res),
          err => console.log(err)
        );
      }
    }else{
      for(let dd of this.userdetails){
        this.temp_user[dd.colid] = this.slctd_user[dd.colid];
      }
      for(let tr of this.temproles){
        tr.checked = this.temp_user.roles.some((tur:string) => tur===tr.rolename);
      }
    }
    this.userEditable = (this.userEditable === 'userEditable')?'userUneditable':'userEditable';
    this.editUserButton = !this.editUserButton;
  }

  retractDoc1(){
    this.user1expand = 'user1retract';
    this.user2expand = 'user2expand';
  }

  usersToggle(){
    let prevactive = this.user_data.find((dd: any) => dd.rowclass.toLowerCase().includes('table-active'));
    if(prevactive){
      prevactive.rowclass = prevactive.rowclass.replace(' table-active', '');
    }
    this.user1expand = 'user1expand';
    this.user2expand = 'user2retract';
  }

  selectedRoles(){
    this.temp_user.roles = this.temproles.filter((r:any) => r.checked).map((a:any) => a.rolename);
  }

}
