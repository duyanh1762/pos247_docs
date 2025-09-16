import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPoliciesComponent } from './menu-policies.component';

describe('MenuPoliciesComponent', () => {
  let component: MenuPoliciesComponent;
  let fixture: ComponentFixture<MenuPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPoliciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
