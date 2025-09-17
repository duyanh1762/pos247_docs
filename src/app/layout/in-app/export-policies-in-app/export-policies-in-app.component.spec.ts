import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPoliciesInAppComponent } from './export-policies-in-app.component';

describe('ExportPoliciesInAppComponent', () => {
  let component: ExportPoliciesInAppComponent;
  let fixture: ComponentFixture<ExportPoliciesInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportPoliciesInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportPoliciesInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
