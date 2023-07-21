import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedDevicesTableComponent } from './allocated-devices-table.component';

describe('AllocatedDevicesTableComponent', () => {
  let component: AllocatedDevicesTableComponent;
  let fixture: ComponentFixture<AllocatedDevicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedDevicesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocatedDevicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
