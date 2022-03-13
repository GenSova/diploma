import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';
import { Category } from './models/category.model';
import { BookInfo } from './models/bookinfo.model';
import { Account } from './models/account.model';
import { Comment } from './models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categoriesApi = 'http://localhost:3000/categories/';
  bookInfoApi = 'http://localhost:3000/bookInfo/';
  usersApi = 'http://localhost:3000/accounts/';
  subscribesApi = 'http://localhost:3000/subscribes/';
  commentsApi = 'http://localhost:3000/comments/';
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get<Book[]>(this.bookInfoApi);
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
  login(data): Observable<any>{
    return this.http.post(`http://localhost:3000/accounts/`, data);
  }
  getSubscribes() {
    return this.http.get<Book[]>(this.subscribesApi);
  }
  addFav(data): Observable<any>{
    return this.http.post('http://localhost:3000/subscribes/', data);
  }
  getComments() {
    return this.http.get<Comment[]>(this.commentsApi);
  }
}
