import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-popper',
  templateUrl: './popper.component.html',
  styleUrls: ['./popper.component.css']
})
export class PopperComponent implements AfterViewInit, OnDestroy {

  @ViewChild('buttonElement') buttonElement!: ElementRef;
  @ViewChild('tooltipElement') tooltipElement!: ElementRef;
  popperInstance: any;
  showTooltip = false;

  ngAfterViewInit() {
    this.popperInstance = createPopper(this.buttonElement.nativeElement, this.tooltipElement.nativeElement, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });

    this.buttonElement.nativeElement.addEventListener('mouseenter', () => this.show());
    this.buttonElement.nativeElement.addEventListener('focus', () => this.show());
    this.buttonElement.nativeElement.addEventListener('mouseleave', () => this.hide());
    this.buttonElement.nativeElement.addEventListener('blur', () => this.hide());
  }

  ngOnDestroy() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  show() {
    this.showTooltip = true;
    this.popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    this.popperInstance.update();
  }

  hide() {
    this.showTooltip = false;
    this.popperInstance.setOptions((options: any) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }
}
