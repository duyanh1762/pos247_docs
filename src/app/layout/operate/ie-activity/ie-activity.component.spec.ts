import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeActivityComponent } from './ie-activity.component';

describe('IeActivityComponent', () => {
  let component: IeActivityComponent;
  let fixture: ComponentFixture<IeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IeActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
