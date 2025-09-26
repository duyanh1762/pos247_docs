import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsEditorComponent } from './collections-editor.component';

describe('CollectionsEditorComponent', () => {
  let component: CollectionsEditorComponent;
  let fixture: ComponentFixture<CollectionsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
