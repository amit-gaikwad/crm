import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',
  styleUrls:["./carousel.css"]
})  
export class CarouselComponent {  
  
  constructor(config: NgbCarouselConfig) {  
    config.wrap = true;  
    config.keyboard = true;  
    config.pauseOnHover = true;  
    config.interval = 0;  
    config.showNavigationIndicators = false;
  }  
  ngOnInit() {  
  }  
  
}  