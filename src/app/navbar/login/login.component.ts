import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() searchText: string;
  @Input() loggedIn: boolean;
  @Input() ID: number;
  @Output() IsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  @Output() accountID: EventEmitter<any> = new EventEmitter<any>();
  User: any = [];
  user: any;
  login = '';
  password = '';
  loginValue: string;
  passwordValue: string;
  reg: boolean;
  constructor(private globalVars: Globals, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe(data => this.User = data);
  }
  loginProcess(value: any){
    this.login = this.loginValue;
    this.password = this.passwordValue;
    this.dataService.login(this.login, this.password);
    if (this.getToken().length > 1) {
      this.loggedIn = true;
      this.ID = this.user.id;
      this.IsLoggedIn.emit(this.loggedIn);
      this.accountID.emit(this.ID);
      this.router.navigate(['']);
      this.globalVars.globalID = this.user.id;
      alert('Рады вас видеть ' + this.user.login + ' :)');
    } else {
      alert('Ой, что-то пошло не так :(');
    }

  }

  getToken() {
    if (localStorage.getItem('token') != null) {
      this.setUser();
      return localStorage.getItem('token');
    } else {
      return '';
    }
  }

  setUser() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchText) {
      console.log('Изменение текста поисковой строки: ' + changes);
    }
  }
}
