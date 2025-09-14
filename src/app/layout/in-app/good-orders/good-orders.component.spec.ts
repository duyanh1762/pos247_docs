import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodOrdersComponent } from './good-orders.component';

describe('GoodOrdersComponent', () => {
  let component: GoodOrdersComponent;
  let fixture: ComponentFixture<GoodOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
