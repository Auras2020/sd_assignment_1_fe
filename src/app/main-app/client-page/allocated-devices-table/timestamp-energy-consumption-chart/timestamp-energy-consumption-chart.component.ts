import {Component, Inject, OnInit} from '@angular/core';
import {
  AllocatedDevicesTableService, ChartDTO
} from "../allocated-devices-table.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {formatDate} from "./formatDate";
import {DeviceTableService} from "../../../admin-page/device-table/device-table.service";

@Component({
  selector: 'app-timestamp-energy-consumption-chart',
  templateUrl: './timestamp-energy-consumption-chart.component.html',
  styleUrls: ['./timestamp-energy-consumption-chart.component.css']
})
export class TimestampEnergyConsumptionChartComponent implements OnInit {

  id: string = ''
  name: string = ''
  data: any[] = [];
  chart: ChartDTO[] = []

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Hour';
  showYAxisLabel = true;
  yAxisLabel = 'Energy Consumption';

  form = new FormGroup({
      timestamp: new FormControl(null)
  })

  constructor(private allocatedDevicesTableService: AllocatedDevicesTableService,
              private deviceTableService: DeviceTableService,
              private dialogRef: MatDialogRef<TimestampEnergyConsumptionChartComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    if(data.id){
      this.id = data.id
      this.deviceTableService.findDevice(this.id).subscribe((res) => {
        this.name = res.name
      })
    }
  }

  ngOnInit(): void {
  }

  findEnergiesForDevice(){
    const parsedValue = {
      deviceId: this.id,
      timestamp: formatDate(this.form.value.timestamp)
    }

    this.allocatedDevicesTableService.findCharts(parsedValue).subscribe((res) => {
      this.chart = res
      this.data = JSON.parse(JSON.stringify(this.chart))
    })
  }

}
