import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGoodsGroupComponent } from './report-goods-group.component';

describe('ReportGoodsGroupComponent', () => {
  let component: ReportGoodsGroupComponent;
  let fixture: ComponentFixture<ReportGoodsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGoodsGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportGoodsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
