import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

// Declaramos Swiper como una variable global
declare var Chart: any;

@Component({
  selector: 'app-chard',
  templateUrl: './chard.component.html',
  styleUrls: ['./chard.component.css']
})
export class ChardComponent implements AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const chartConfig = {
      type: 'radar', // tipo de gráfico
      data: {
        labels: ['Comer', 'Beber', 'Dormir', 'Diseñar', 'Programar', 'Ciclo', 'Correr'],
        datasets: [{
          label: 'Semana pasada',
          data: [10, 10, 4, 2, 2, 3, 10],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // color de relleno con transparencia
          borderColor: 'rgb(255, 99, 132)', // color de la línea
          pointBackgroundColor: 'rgb(255, 99, 132)', // color de los puntos
          pointBorderColor: '#fff', // color del borde de los puntos
          pointHoverBackgroundColor: '#fff', // color de los puntos al pasar el ratón
          pointHoverBorderColor: 'rgb(255, 99, 132)' // color del borde de los puntos al pasar el ratón
        }, {
          label: 'Esta semana',
          data: [10, 15, 17, 10, 11, 15, 15],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // color de relleno con transparencia
          borderColor: 'rgb(54, 162, 235)', // color de la línea
          pointBackgroundColor: 'rgb(54, 162, 235)', // color de los puntos
          pointBorderColor: '#fff', // color del borde de los puntos
          pointHoverBackgroundColor: '#fff', // color de los puntos al pasar el ratón
          pointHoverBorderColor: 'rgb(54, 162, 235)' // color del borde de los puntos al pasar el ratón
        }]
      },
      options: {
        elements: {
          line: {
            tension: -0.1 // las líneas serán directas, no curvas
          }
        }
      }
    };

    const ctx = this.myChart.nativeElement.getContext('2d');
    new Chart(ctx, chartConfig);
  }
}