import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKitchenComponent } from './create-kitchen.component';

describe('CreateKitchenComponent', () => {
  let component: CreateKitchenComponent;
  let fixture: ComponentFixture<CreateKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKitchenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
