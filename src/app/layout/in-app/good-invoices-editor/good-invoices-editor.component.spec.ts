import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInvoicesEditorComponent } from './good-invoices-editor.component';

describe('GoodInvoicesEditorComponent', () => {
  let component: GoodInvoicesEditorComponent;
  let fixture: ComponentFixture<GoodInvoicesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodInvoicesEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodInvoicesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
