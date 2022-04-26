import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-unwanted',
  templateUrl: './unwanted.component.html',
  styleUrls: ['./unwanted.component.css']
})
export class UnwantedComponent implements OnInit {
  unwanted$: Book[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUnwanted()
      .subscribe(data => this.unwanted$ = data);
  }

}
