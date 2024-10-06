import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealComponent } from './diet-meal.component';

describe('DietMealComponent', () => {
  let component: DietMealComponent;
  let fixture: ComponentFixture<DietMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
