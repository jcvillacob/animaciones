import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements AfterViewInit {
  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef>;

  imagenes: any[] = [
    {url: 'https://th.bing.com/th/id/OIG.bygw90WKs12cU3FcnQgM?pid=ImgGn', name: 'Img1', see: false},
    {url: 'https://th.bing.com/th/id/OIG.y.p1SyCl73qxCuV9Ui0e?pid=ImgGn', name: 'Img2', see: false},
    {url: 'https://th.bing.com/th/id/OIG.yzY7CjeonAxVE0gAcKMn?pid=ImgGn', name: 'Img3', see: false},
    {url: 'https://th.bing.com/th/id/OIG.UuwvyBS_a13eboIECl2K?pid=ImgGn', name: 'Img4', see: false},
    {url: 'https://th.bing.com/th/id/OIG.NpmF5dZpz13l8guj62zd?pid=ImgGn', name: 'Img5', see: false},
    {url: 'https://th.bing.com/th/id/OIG.bygw90WKs12cU3FcnQgM?pid=ImgGn', name: 'Img1', see: false},
    {url: 'https://th.bing.com/th/id/OIG.y.p1SyCl73qxCuV9Ui0e?pid=ImgGn', name: 'Img2', see: false},
    {url: 'https://th.bing.com/th/id/OIG.yzY7CjeonAxVE0gAcKMn?pid=ImgGn', name: 'Img3', see: false},
    {url: 'https://th.bing.com/th/id/OIG.UuwvyBS_a13eboIECl2K?pid=ImgGn', name: 'Img4', see: false},
    {url: 'https://th.bing.com/th/id/OIG.Z1Z.XXzP91MG18xmF3dm?pid=ImgGn', name: 'Img5', see: false},
    {url: 'https://th.bing.com/th/id/OIG.bygw90WKs12cU3FcnQgM?pid=ImgGn', name: 'Img1', see: false},
    {url: 'https://th.bing.com/th/id/OIG.y.p1SyCl73qxCuV9Ui0e?pid=ImgGn', name: 'Img2', see: false},
    {url: 'https://th.bing.com/th/id/OIG.yzY7CjeonAxVE0gAcKMn?pid=ImgGn', name: 'Img3', see: false},
    {url: 'https://th.bing.com/th/id/OIG.UuwvyBS_a13eboIECl2K?pid=ImgGn', name: 'Img4', see: false},
    {url: 'https://th.bing.com/th/id/OIG.Z1Z.XXzP91MG18xmF3dm?pid=ImgGn', name: 'Img5', see: false},
  ];

  constructor () {
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('index'));
          if (index >= 0) {
            this.imagenes[index].see = true;
          }
        }
      });
    }, options);

    // Retrasar la observación por una fracción de segundo
    setTimeout(() => {
      this.imageElements.forEach(imageElement => observer.observe(imageElement.nativeElement));
    }, 100); // Puedes ajustar este tiempo si es necesario
  }
}
