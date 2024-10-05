import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageTableComponent } from './beverage-table.component';

describe('BeverageTableComponent', () => {
  let component: BeverageTableComponent;
  let fixture: ComponentFixture<BeverageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeverageTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
