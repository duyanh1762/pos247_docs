import { TestBed } from '@angular/core/testing';

import { ImageHandleService } from './image-handle.service';

describe('ImageHandleService', () => {
  let service: ImageHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
