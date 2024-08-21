import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsComponent } from './meal-details.component';

describe('MealComponent', () => {
  let component: MealDetailsComponent;
  let fixture: ComponentFixture<MealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
