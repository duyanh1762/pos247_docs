import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInAppComponent } from './goods-in-app.component';

describe('GoodsInAppComponent', () => {
  let component: GoodsInAppComponent;
  let fixture: ComponentFixture<GoodsInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodsInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
