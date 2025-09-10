import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInAppComponent } from './staff-in-app.component';

describe('StaffInAppComponent', () => {
  let component: StaffInAppComponent;
  let fixture: ComponentFixture<StaffInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
