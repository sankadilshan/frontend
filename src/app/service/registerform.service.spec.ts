import { TestBed, inject } from '@angular/core/testing';

import { RegisterformService } from './registerform.service';

describe('RegisterformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterformService]
    });
  });

  it('should be created', inject([RegisterformService], (service: RegisterformService) => {
    expect(service).toBeTruthy();
  }));
});
