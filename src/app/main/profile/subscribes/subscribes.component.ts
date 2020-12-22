import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';
import {Game} from '../../../models/game.model';

@Component({
  selector: 'app-subscribes',
  templateUrl: './subscribes.component.html',
  styleUrls: ['./subscribes.component.css']
})
export class SubscribesComponent implements OnInit {
  subscribes$: Game[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSubscribes()
      .subscribe(data => this.subscribes$ = data);
  }

}
