import { TestBed } from '@angular/core/testing';

import { RepertroireServiceService } from './repertroire-service.service';

describe('RepertroireServiceService', () => {
  let service: RepertroireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepertroireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
