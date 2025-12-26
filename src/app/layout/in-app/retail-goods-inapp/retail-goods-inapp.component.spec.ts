import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailGoodsInappComponent } from './retail-goods-inapp.component';

describe('RetailGoodsInappComponent', () => {
  let component: RetailGoodsInappComponent;
  let fixture: ComponentFixture<RetailGoodsInappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailGoodsInappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailGoodsInappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
