import { TestBed } from '@angular/core/testing';

import { UploadAPIService } from './upload-api.service';

describe('UploadAPIService', () => {
  let service: UploadAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
