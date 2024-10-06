import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealControlDialogComponent } from './diet-meal-control-dialog.component';

describe('DietMealControlDialogComponent', () => {
  let component: DietMealControlDialogComponent;
  let fixture: ComponentFixture<DietMealControlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietMealControlDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
