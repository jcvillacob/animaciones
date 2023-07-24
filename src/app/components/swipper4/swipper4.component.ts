import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swipper4',
  templateUrl: './swipper4.component.html',
  styleUrls: ['./swipper4.component.css']
})
export class Swipper4Component implements AfterViewInit {

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
