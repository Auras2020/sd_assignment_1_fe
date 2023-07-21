import { TestBed } from '@angular/core/testing';

import { AllocatedDevicesTableService } from './allocated-devices-table.service';

describe('AllocatedDevicesTableService', () => {
  let service: AllocatedDevicesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocatedDevicesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
