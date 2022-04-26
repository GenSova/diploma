import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';
import {Account} from '../../models/account.model';
import { DataService } from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentID: number;
  userData: Account[];
  loginStatus = false;
  constructor(private globalVars: Globals, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginStatus = true;
    this.currentID = this.globalVars.globalID;
    this.dataService.getUsersData(this.currentID)
      .subscribe(data => this.userData = data);
  }

}
