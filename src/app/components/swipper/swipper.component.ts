import { Component, AfterViewInit } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css'],
})
export class SwipperComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      effect: "slide",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
