import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swipper3Component } from './swipper3.component';

describe('Swipper3Component', () => {
  let component: Swipper3Component;
  let fixture: ComponentFixture<Swipper3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Swipper3Component]
    });
    fixture = TestBed.createComponent(Swipper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
