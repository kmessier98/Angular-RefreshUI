import { TestBed } from '@angular/core/testing';

import { Service4 } from './service4';

describe('Service4', () => {
  let service: Service4;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service4);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
