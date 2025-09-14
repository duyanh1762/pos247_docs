import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodChecksComponent } from './good-checks.component';

describe('GoodChecksComponent', () => {
  let component: GoodChecksComponent;
  let fixture: ComponentFixture<GoodChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodChecksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
