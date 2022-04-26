import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-desired',
  templateUrl: './desired.component.html',
  styleUrls: ['./desired.component.css']
})
export class DesiredComponent implements OnInit {
  desired$: Book[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDesired()
      .subscribe(data => this.desired$ = data);
  }

}
