import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPoliciesEditorComponent } from './menu-policies-editor.component';

describe('MenuPoliciesEditorComponent', () => {
  let component: MenuPoliciesEditorComponent;
  let fixture: ComponentFixture<MenuPoliciesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPoliciesEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuPoliciesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
