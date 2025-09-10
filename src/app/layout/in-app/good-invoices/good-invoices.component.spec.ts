import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInvoicesComponent } from './good-invoices.component';

describe('GoodInvoicesComponent', () => {
  let component: GoodInvoicesComponent;
  let fixture: ComponentFixture<GoodInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
