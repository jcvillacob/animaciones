import { AfterViewInit, Component } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Swiper: any;

@Component({
  selector: 'app-swipper5',
  templateUrl: './swipper5.component.html',
  styleUrls: ['./swipper5.component.css']
})
export class Swipper5Component implements AfterViewInit {

  ngAfterViewInit() {
    /* PRIMER SWIPPER */
    new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 0,
      grabCursor: true,
      loop: true,
      spaceBetween: 2,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
        scale: 0.92
      },
      /* pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }, */
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}