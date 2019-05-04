import { TestBed, inject } from '@angular/core/testing';

import { Authguard2Service } from './authguard2.service';

describe('Authguard2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Authguard2Service]
    });
  });

  it('should be created', inject([Authguard2Service], (service: Authguard2Service) => {
    expect(service).toBeTruthy();
  }));
});
