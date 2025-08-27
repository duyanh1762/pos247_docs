import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BartendingComponent } from './bartending.component';

describe('BartendingComponent', () => {
  let component: BartendingComponent;
  let fixture: ComponentFixture<BartendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BartendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BartendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
