import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';
import { Category } from './models/category.model';
import { BookInfo } from './models/bookinfo.model';
import { Account } from './models/account.model';
import { Comment } from './models/comments.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categoriesApi = 'http://localhost:3000/categories/';
  bookInfoApi = 'books';
  usersApi = 'http://localhost:3000/accounts/';
  subscribesApi = 'http://localhost:3000/subscribes/';
  desiredApi = 'http://localhost:3000/desired/';
  stockApi = 'http://localhost:3000/stock/';
  unwantedApi = 'http://localhost:3000/unwanted/';
  commentsApi = 'http://localhost:3000/comments/';
  loggedIn: any;
  apiBooks = '/api/books';
  token: any;
  constructor(private http: HttpClient, private router: Router) {}
  getBooks() {
    return this.http.get<Book[]>(this.bookInfoApi);
  }
  getBooksFull() {
    return this.http.get<BookInfo[]>(this.bookInfoApi);
  }
  getCategories() {
    return this.http.get<Category[]>(this.categoriesApi);
  }
  getBooksInfo(id): Observable<BookInfo> {
    return this.http.get<BookInfo>(this.bookInfoApi + id);
  }
  getUsers() {
    return this.http.get<Account[]>(this.usersApi);
  }
  getUsersData(id): Observable<Account[]> {
    return this.http.get<Account[]>(this.usersApi + id);
  }
  register(data): Observable<any>{
    return this.http.post(`register`, data);
  }

  login(login, password) {
    this.http.post('login', {login, password}).subscribe(res => {
      this.token = res;
      localStorage.setItem('token', 'Bearer ' + this.token.token);
      localStorage.setItem('user', JSON.stringify(this.token.user));
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn = false;
    this.router.navigate(['/']);
    window.location.reload();
  }

  getSubscribes() {
    return this.http.get<Book[]>(this.subscribesApi);
  }
  getDesired() {
    return this.http.get<Book[]>(this.desiredApi);
  }
  getStock() {
    return this.http.get<Book[]>(this.stockApi);
  }
  getUnwanted() {
    return this.http.get<Book[]>(this.unwantedApi);
  }
  addFav(data): Observable<any>{
    return this.http.post('http://localhost:3000/subscribes/', data);
  }
  addDesiredd(data): Observable<any>{
    return this.http.post('http://localhost:3000/desired/', data);
  }
  addStockk(data): Observable<any>{
    return this.http.post('http://localhost:3000/stock/', data);
  }
  addUnwantedd(data): Observable<any>{
    return this.http.post('http://localhost:3000/unwanted/', data);
  }
  getComments() {
    return this.http.get<Comment[]>(this.commentsApi);
  }
}
