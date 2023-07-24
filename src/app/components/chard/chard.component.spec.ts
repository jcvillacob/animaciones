import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChardComponent } from './chard.component';

describe('ChardComponent', () => {
  let component: ChardComponent;
  let fixture: ComponentFixture<ChardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChardComponent]
    });
    fixture = TestBed.createComponent(ChardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
