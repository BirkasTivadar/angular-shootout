import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UrlServiceService } from '../url-service.service';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageChangstringe: EventEmitter<string> = new EventEmitter();
  currentUrl: any = "/";

  constructor(private urlService: UrlServiceService) {

  }

  ngOnInit(): void {
    this.urlService.pushUrl(this.currentUrl);
  }

  onLinkClick($event: Event) {
    $event.preventDefault(); // azért, hogy a kattintás ne navigáljon új oldalra
    let elem = $event.target as HTMLLinkElement; // azért, mert ha közvetlenül a $event.target-nek akarnám meghívni a getAttribute() metódusát, akkor hibát jelezne, mert nem tudná biztosan, hogy van e neki
    this.currentUrl = elem.getAttribute('href');

    this.urlService.pushUrl(this.currentUrl);
  }

}
