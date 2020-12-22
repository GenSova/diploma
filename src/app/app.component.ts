import { Component } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'Final-project';
  today: number = Date.now();
  ngOnChanges(changes: SimpleChanges) {
    console.log('AppComponent: OnChanges Event');
  }
}
