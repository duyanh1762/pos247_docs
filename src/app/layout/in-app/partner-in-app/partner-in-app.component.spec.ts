import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerInAppComponent } from './partner-in-app.component';

describe('PartnerInAppComponent', () => {
  let component: PartnerInAppComponent;
  let fixture: ComponentFixture<PartnerInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
