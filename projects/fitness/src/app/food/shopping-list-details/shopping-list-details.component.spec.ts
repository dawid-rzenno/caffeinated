import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailsComponent } from './shopping-list-details.component';

describe('ShoppingListComponent', () => {
  let component: ShoppingListDetailsComponent;
  let fixture: ComponentFixture<ShoppingListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
