import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swipper2',
  templateUrl: './swipper2.component.html',
  styleUrls: ['./swipper2.component.css']
})
export class Swipper2Component implements AfterViewInit {


  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
  }


}
