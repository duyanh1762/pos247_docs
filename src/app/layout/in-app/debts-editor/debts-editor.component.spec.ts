import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsEditorComponent } from './debts-editor.component';

describe('DebtsEditorComponent', () => {
  let component: DebtsEditorComponent;
  let fixture: ComponentFixture<DebtsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
