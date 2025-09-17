import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPoliciesComponent } from './export-policies.component';

describe('ExportPoliciesComponent', () => {
  let component: ExportPoliciesComponent;
  let fixture: ComponentFixture<ExportPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
