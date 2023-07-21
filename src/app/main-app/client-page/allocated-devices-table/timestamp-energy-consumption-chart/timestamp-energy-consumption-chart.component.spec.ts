import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampEnergyConsumptionChartComponent } from './timestamp-energy-consumption-chart.component';

describe('TimestampEnergyConsumptionChartComponent', () => {
  let component: TimestampEnergyConsumptionChartComponent;
  let fixture: ComponentFixture<TimestampEnergyConsumptionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampEnergyConsumptionChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimestampEnergyConsumptionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
