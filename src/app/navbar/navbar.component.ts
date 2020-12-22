import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 0;
  searchText;
  games$: Game[];
  logoElement1 = "org";
  logoElement2 = "торрент";
  logoElement3 = "игруха";
  loginStatus = false;
  userID: number;
  userData: any;
  constructor(private route: ActivatedRoute, public dataService: DataService, private router: Router) { }
  valueChangedHandler(status: boolean) {
    this.a = 1;
    this.loginStatus = status;
    console.log(this.loginStatus);
  }
  valueUserID(id: number) {
    this.userID = id;
    console.log("Users id: " + this.userID);
    this.dataService.getUsersData(this.userID)
      .subscribe(data => this.userData = data);
  }
  ngOnInit(): void {
    this.dataService.getGames()
      .subscribe(data => this.games$ = data);
  }
}
