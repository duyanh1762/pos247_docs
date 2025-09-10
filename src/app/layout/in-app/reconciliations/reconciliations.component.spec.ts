import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationsComponent } from './reconciliations.component';

describe('ReconciliationsComponent', () => {
  let component: ReconciliationsComponent;
  let fixture: ComponentFixture<ReconciliationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconciliationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReconciliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
