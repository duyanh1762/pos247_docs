import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPoliciesEditorComponent } from './export-policies-editor.component';

describe('ExportPoliciesEditorComponent', () => {
  let component: ExportPoliciesEditorComponent;
  let fixture: ComponentFixture<ExportPoliciesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportPoliciesEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportPoliciesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
