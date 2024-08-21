import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTableComponent } from './shopping-list-table.component';

describe('ShoppingListTableComponent', () => {
  let component: ShoppingListTableComponent;
  let fixture: ComponentFixture<ShoppingListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
