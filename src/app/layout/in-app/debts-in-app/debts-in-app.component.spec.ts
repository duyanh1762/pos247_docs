import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsInAppComponent } from './debts-in-app.component';

describe('DebtsInAppComponent', () => {
  let component: DebtsInAppComponent;
  let fixture: ComponentFixture<DebtsInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtsInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtsInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
