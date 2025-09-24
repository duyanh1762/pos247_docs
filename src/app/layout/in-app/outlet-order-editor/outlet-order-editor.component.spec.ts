import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletOrderEditorComponent } from './outlet-order-editor.component';

describe('OutletOrderEditorComponent', () => {
  let component: OutletOrderEditorComponent;
  let fixture: ComponentFixture<OutletOrderEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutletOrderEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutletOrderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
