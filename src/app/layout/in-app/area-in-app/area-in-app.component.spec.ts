import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInAppComponent } from './area-in-app.component';

describe('AreaInAppComponent', () => {
  let component: AreaInAppComponent;
  let fixture: ComponentFixture<AreaInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
