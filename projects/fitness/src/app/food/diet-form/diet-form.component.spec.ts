import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietFormComponent } from './diet-form.component';

describe('DietFormComponent', () => {
  let component: DietFormComponent;
  let fixture: ComponentFixture<DietFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DietFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
