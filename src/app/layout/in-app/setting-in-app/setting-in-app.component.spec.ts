import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingInAppComponent } from './setting-in-app.component';

describe('SettingInAppComponent', () => {
  let component: SettingInAppComponent;
  let fixture: ComponentFixture<SettingInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
