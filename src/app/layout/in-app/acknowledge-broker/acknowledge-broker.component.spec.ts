import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeBrokerComponent } from './acknowledge-broker.component';

describe('AcknowledgeBrokerComponent', () => {
  let component: AcknowledgeBrokerComponent;
  let fixture: ComponentFixture<AcknowledgeBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgeBrokerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgeBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
