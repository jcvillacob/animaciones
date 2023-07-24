import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swipper4Component } from './swipper4.component';

describe('Swipper4Component', () => {
  let component: Swipper4Component;
  let fixture: ComponentFixture<Swipper4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Swipper4Component]
    });
    fixture = TestBed.createComponent(Swipper4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
