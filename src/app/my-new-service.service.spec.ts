import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './my-new-service.service';

describe('MyNewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
