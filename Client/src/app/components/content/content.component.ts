import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentPage: string = 'schedules';

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userRole: string[] = [];
  @Output() logoutUser = new EventEmitter<string>();

  recieveMessage($event: any){
    if($event==='logout'){
      this.logoutUser.emit('logout');
    }
    this.currentPage = $event;
  }

}
