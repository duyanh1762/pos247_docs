import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCheckEditorComponent } from './good-check-editor.component';

describe('GoodCheckEditorComponent', () => {
  let component: GoodCheckEditorComponent;
  let fixture: ComponentFixture<GoodCheckEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodCheckEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodCheckEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
