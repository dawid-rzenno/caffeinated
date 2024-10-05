import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageFormComponent } from './beverage-form.component';

describe('BeverageFormComponent', () => {
  let component: BeverageFormComponent;
  let fixture: ComponentFixture<BeverageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeverageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
