import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/comments.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  today: number = Date.now();
  comments$: Comment[];
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getComments()
      .subscribe(data => this.comments$ = data);
  }
  addReview(newName, newComment) {
    this.comments$.unshift({name: newName, message: newComment});
    return false;
  }
}
