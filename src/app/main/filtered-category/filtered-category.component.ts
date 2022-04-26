import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data.service';
import {Book} from '../../models/book.model';
import {BookInfo} from '../../models/bookinfo.model';

@Component({
  selector: 'app-filtered-category',
  templateUrl: './filtered-category.component.html',
  styleUrls: ['./filtered-category.component.css']
})
export class FilteredCategoryComponent implements OnInit {
  name = this.route.snapshot.params['categoryName'];
  books$: BookInfo[];
  public show = true;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBooksFull()
      .subscribe(data => this.books$ = data.filter(book => book.category.match(this.name)));
  }
}
