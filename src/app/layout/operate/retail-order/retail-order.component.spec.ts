import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailOrderComponent } from './retail-order.component';

describe('RetailOrderComponent', () => {
  let component: RetailOrderComponent;
  let fixture: ComponentFixture<RetailOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
