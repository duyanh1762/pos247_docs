import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPoliciesInAppComponent } from './menu-policies-in-app.component';

describe('MenuPoliciesInAppComponent', () => {
  let component: MenuPoliciesInAppComponent;
  let fixture: ComponentFixture<MenuPoliciesInAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPoliciesInAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPoliciesInAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
