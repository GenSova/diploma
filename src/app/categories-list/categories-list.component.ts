import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories$: Category[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories()
      .subscribe(data => this.categories$ = data);
  }

}
