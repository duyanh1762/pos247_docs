import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBillsComponent } from './export-bills.component';

describe('ExportBillsComponent', () => {
  let component: ExportBillsComponent;
  let fixture: ComponentFixture<ExportBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportBillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
