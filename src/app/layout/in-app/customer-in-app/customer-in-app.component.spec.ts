import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInAppComponent } from './customer-in-app.component';

describe('CustomerInAppComponent', () => {
  let component: CustomerInAppComponent;
  let fixture: ComponentFixture<CustomerInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
