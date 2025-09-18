import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeInAppComponent } from './fee-in-app.component';

describe('FeeInAppComponent', () => {
  let component: FeeInAppComponent;
  let fixture: ComponentFixture<FeeInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
