import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailGoodsComponent } from './retail-goods.component';

describe('RetailGoodsComponent', () => {
  let component: RetailGoodsComponent;
  let fixture: ComponentFixture<RetailGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
