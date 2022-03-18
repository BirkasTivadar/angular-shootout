import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shootout';

  @Output() pageChanged: EventEmitter<string> = new EventEmitter();

  onPageChange($event: any) {
    console.log($event);
    this.pageChanged.emit($event);
  }
}
