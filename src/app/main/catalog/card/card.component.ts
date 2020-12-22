import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  games$: Game[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getGames()
      .subscribe(data => this.games$ = data);
  }
  ngOnDestroy() {
    console.log('Вы покинули главную страницу');
  }
}
