import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockOutComponent } from './clock-out.component';

describe('ClockOutComponent', () => {
  let component: ClockOutComponent;
  let fixture: ComponentFixture<ClockOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
