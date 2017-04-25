import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './my-new-service.service';

describe('MyNewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
	imports: [RouterTestingModule],
      providers: [AuthenticationService]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
