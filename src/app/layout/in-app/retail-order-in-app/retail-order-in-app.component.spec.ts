import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailOrderInAppComponent } from './retail-order-in-app.component';

describe('RetailOrderInAppComponent', () => {
  let component: RetailOrderInAppComponent;
  let fixture: ComponentFixture<RetailOrderInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetailOrderInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetailOrderInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
