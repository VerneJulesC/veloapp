import { Component, OnInit } from '@angular/core';
import { VeloService } from 'src/app/services/velo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _velo: VeloService) { }

  ngOnInit(): void {
  }

}
