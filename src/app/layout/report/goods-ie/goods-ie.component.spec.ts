import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsIEComponent } from './goods-ie.component';

describe('GoodsIEComponent', () => {
  let component: GoodsIEComponent;
  let fixture: ComponentFixture<GoodsIEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsIEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsIEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
