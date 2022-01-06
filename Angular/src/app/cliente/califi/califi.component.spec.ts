import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifiComponent } from './califi.component';

describe('CalifiComponent', () => {
  let component: CalifiComponent;
  let fixture: ComponentFixture<CalifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
