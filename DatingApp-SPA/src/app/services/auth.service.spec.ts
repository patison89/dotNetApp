/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth.serviceService } from './auth.service';

describe('Service: Auth.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.serviceService]
    });
  });

  it('should ...', inject([Auth.serviceService], (service: Auth.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
