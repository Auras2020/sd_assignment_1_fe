import { TestBed } from '@angular/core/testing';

import { DeviceTableService } from './device-table.service';

describe('DeviceTableService', () => {
  let service: DeviceTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
