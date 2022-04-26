import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';
import {Account} from '../models/account.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a = 0;
  searchText;
  games$: Book[];
  loginStatus = false;
  userID: number;
  userData: Account[];
  globalID: number;
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
  logOut(){
    this.loginStatus = false;
  }
  ngOnInit(): void {
    this.dataService.getBooks()
      .subscribe(data => this.games$ = data);
  }
}
