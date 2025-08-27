import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGoodsComponent } from './order-goods.component';

describe('OrderGoodsComponent', () => {
  let component: OrderGoodsComponent;
  let fixture: ComponentFixture<OrderGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
