import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFinanceGroupComponent } from './report-finance-group.component';

describe('ReportFinanceGroupComponent', () => {
  let component: ReportFinanceGroupComponent;
  let fixture: ComponentFixture<ReportFinanceGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportFinanceGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportFinanceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
