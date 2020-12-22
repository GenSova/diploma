import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';
import { Game } from '../../models/game.model';
import { Params } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  games$: Game[];
  id = this.route.snapshot.params['id'];
  gameInfo: any;
  searchValue: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getGames()
      .subscribe(data => this.games$ = data);
    this.dataService.getGamesInfo(this.id)
      .subscribe(data => this.gameInfo = data);
    console.log(this.gameInfo);
    this.route.params.subscribe((params: Params) => {
      this.searchValue = params['id'];
      this.dataService
        .getGamesInfo(this.searchValue)
        .subscribe(gameinfo => {
          this.gameInfo = gameinfo;
        });
    });
  }
  addSubs(){
      this.dataService.addFav(this.gameInfo).subscribe(result => {
        alert('Добавлено');
      });
    }
}
