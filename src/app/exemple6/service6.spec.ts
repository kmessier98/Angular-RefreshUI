import { TestBed } from '@angular/core/testing';

import { Service6 } from './service6';

describe('Service6', () => {
  let service: Service6;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service6);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
