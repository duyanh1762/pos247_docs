import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsNotfoundComponent } from './docs-notfound.component';

describe('DocsNotfoundComponent', () => {
  let component: DocsNotfoundComponent;
  let fixture: ComponentFixture<DocsNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocsNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
