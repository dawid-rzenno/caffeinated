import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealControlComponent } from './diet-meal-control.component';

describe('DietMealControlComponent', () => {
  let component: DietMealControlComponent;
  let fixture: ComponentFixture<DietMealControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietMealControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
