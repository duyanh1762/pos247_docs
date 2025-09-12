import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrOperateComponent } from './qr-operate.component';

describe('QrOperateComponent', () => {
  let component: QrOperateComponent;
  let fixture: ComponentFixture<QrOperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrOperateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
