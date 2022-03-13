import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  books$: Book[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBooks()
      .subscribe(data => this.books$ = data);
  }
  ngOnDestroy() {
    console.log('Вы покинули главную страницу');
  }
}
