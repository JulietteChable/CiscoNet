import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiscalifiComponent } from './liscalifi.component';

describe('LiscalifiComponent', () => {
  let component: LiscalifiComponent;
  let fixture: ComponentFixture<LiscalifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiscalifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiscalifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
