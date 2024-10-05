import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDetailsComponent } from './workout-details.component';

describe('WorkoutDetailsComponent', () => {
  let component: WorkoutDetailsComponent;
  let fixture: ComponentFixture<WorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
