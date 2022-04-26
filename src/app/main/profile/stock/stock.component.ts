import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock$: Book[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStock()
      .subscribe(data => this.stock$ = data);
  }

}
