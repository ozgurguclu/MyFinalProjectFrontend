import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummeryComponent } from './cart-summery.component';

describe('CartSummeryComponent', () => {
  let component: CartSummeryComponent;
  let fixture: ComponentFixture<CartSummeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartSummeryComponent]
    });
    fixture = TestBed.createComponent(CartSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
