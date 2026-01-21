import { TestBed } from '@angular/core/testing';

import { Service5 } from './service5';

describe('Service5', () => {
  let service: Service5;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service5);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
