import { TestBed } from '@angular/core/testing';

import { AuthgrardServiceService } from './authgrard-service.service';

describe('AuthgrardServiceService', () => {
  let service: AuthgrardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgrardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
