import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';
import { Book } from '../../models/book.model';
import { Params } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  books$: Book[];
  id = this.route.snapshot.params['id'];
  bookInfo: any;
  searchValue: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBooks()
      .subscribe(data => this.books$ = data);
    this.dataService.getBooksInfo(this.id)
      .subscribe(data => this.bookInfo = data);
    console.log(this.bookInfo);
    this.route.params.subscribe((params: Params) => {
      this.searchValue = params['id'];
      this.dataService
        .getBooksInfo(this.searchValue)
        .subscribe(bookinfo => {
          this.bookInfo = bookinfo;
        });
    });
  }
  addSubs(){
      this.dataService.addFav(this.bookInfo).subscribe(result => {
        alert('Добавлено');
      });
    }
  addDesired(){
    this.dataService.addDesiredd(this.bookInfo).subscribe(result => {
      alert('Добавлено');
    });
  }
  addStock(){
    this.dataService.addStockk(this.bookInfo).subscribe(result => {
      alert('Добавлено');
    });
  }
  addUnwanted(){
    this.dataService.addUnwantedd(this.bookInfo).subscribe(result => {
      alert('Добавлено');
    });
  }
}
