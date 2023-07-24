import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swipper3',
  templateUrl: './swipper3.component.html',
  styleUrls: ['./swipper3.component.css']
})
export class Swipper3Component implements AfterViewInit {

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
