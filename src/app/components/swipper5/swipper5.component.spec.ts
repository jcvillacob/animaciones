import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swipper5Component } from './swipper5.component';

describe('Swipper5Component', () => {
  let component: Swipper5Component;
  let fixture: ComponentFixture<Swipper5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Swipper5Component]
    });
    fixture = TestBed.createComponent(Swipper5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
