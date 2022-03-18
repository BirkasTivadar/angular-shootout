import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentPage: string = "/";


  @Input() onPageChanged!: EventEmitter<string>;

  constructor(private urlService: UrlServiceService) { }

  ngOnInit(): void {
    this.urlService.urlChanged.subscribe(
      ($event) => {
        console.log($event);
        this.currentPage = $event;
      }
    )
  }

}
