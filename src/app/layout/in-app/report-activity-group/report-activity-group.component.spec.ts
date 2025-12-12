import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportActivityGroupComponent } from './report-activity-group.component';

describe('ReportActivityGroupComponent', () => {
  let component: ReportActivityGroupComponent;
  let fixture: ComponentFixture<ReportActivityGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportActivityGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportActivityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
