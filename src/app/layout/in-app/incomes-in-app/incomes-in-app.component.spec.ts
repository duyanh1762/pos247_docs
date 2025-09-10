import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesInAppComponent } from './incomes-in-app.component';

describe('IncomesInAppComponent', () => {
  let component: IncomesInAppComponent;
  let fixture: ComponentFixture<IncomesInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomesInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomesInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
