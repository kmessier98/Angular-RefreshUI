import { TestBed } from '@angular/core/testing';

import { Service3 } from './service3';

describe('Service3', () => {
  let service: Service3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
