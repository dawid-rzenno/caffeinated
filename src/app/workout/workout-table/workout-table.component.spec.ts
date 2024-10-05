import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTableComponent } from './workout-table.component';

describe('WorkoutTableComponent', () => {
  let component: WorkoutTableComponent;
  let fixture: ComponentFixture<WorkoutTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
