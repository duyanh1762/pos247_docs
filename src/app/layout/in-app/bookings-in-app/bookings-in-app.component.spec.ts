import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsInAppComponent } from './bookings-in-app.component';

describe('BookingsInAppComponent', () => {
  let component: BookingsInAppComponent;
  let fixture: ComponentFixture<BookingsInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingsInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
