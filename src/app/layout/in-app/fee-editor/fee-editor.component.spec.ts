import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeEditorComponent } from './fee-editor.component';

describe('FeeEditorComponent', () => {
  let component: FeeEditorComponent;
  let fixture: ComponentFixture<FeeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
