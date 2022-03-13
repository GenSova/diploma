import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

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
  email = '';
  password = '';
  loginValue: string;
  passwordValue: string;
  reg: boolean;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getUsers()
      .subscribe(data => this.User = data);
  }
  loginProcess(value: any){
    this.email = this.loginValue;
    this.password = this.passwordValue;
    if (this.User.find(x => x.email === this.email)){
      this.user = this.User.find(x => x.email === this.email);
      if (this.user.password === this.password){
        this.loggedIn = true;
        this.ID = this.user.id;
        this.IsLoggedIn.emit(this.loggedIn);
        this.accountID.emit(this.ID);
        this.router.navigate(['']);
        alert("Рады вас видеть " + this.user.login + " :)");
      }else {
        alert("Ой, что-то пошло не так :(");
      }
    } else {
      alert("Ой, что-то пошло не так :(");
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchText) {
      console.log('Изменение текста поисковой строки: ' + changes);
    }
  }
}
