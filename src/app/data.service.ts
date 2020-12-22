import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from './models/game.model';
import { Category } from './models/category.model';
import { GameInfo } from './models/gameinfo.model';
import { Account } from './models/account.model';
import {Comment} from './models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gamesApi = 'http://localhost:3000/games/';
  categoriesApi = 'http://localhost:3000/categories/';
  gameInfoApi = 'http://localhost:3000/gameInfo/';
  usersApi = 'http://localhost:3000/accounts/';
  subscribesApi = 'http://localhost:3000/subscribes/';
  commentsApi = 'http://localhost:3000/comments/';
  constructor(private http: HttpClient) {}
  getGames() {
    return this.http.get<Game[]>(this.gamesApi);
  }
  getCategories() {
    return this.http.get<Category[]>(this.categoriesApi);
  }
  getGamesInfo(id): Observable<GameInfo> {
    return this.http.get<GameInfo>(this.gameInfoApi + id);
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
    return this.http.get<Game[]>(this.subscribesApi);
  }
  addFav(data): Observable<any>{
    return this.http.post('http://localhost:3000/subscribes/', data);
  }
  getComments() {
    return this.http.get<Comment[]>(this.commentsApi);
  }
}
