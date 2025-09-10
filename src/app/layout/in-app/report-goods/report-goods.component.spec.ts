import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGoodsComponent } from './report-goods.component';

describe('ReportGoodsComponent', () => {
  let component: ReportGoodsComponent;
  let fixture: ComponentFixture<ReportGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
