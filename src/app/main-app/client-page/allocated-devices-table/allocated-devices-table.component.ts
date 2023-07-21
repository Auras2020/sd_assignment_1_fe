import {Component, OnInit} from '@angular/core';
import {Device} from "../../admin-page/device-table/device-table.service";
import {AllocatedDevicesTableService} from "./allocated-devices-table.service";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  TimestampEnergyConsumptionChartComponent
} from "./timestamp-energy-consumption-chart/timestamp-energy-consumption-chart.component";

@Component({
  selector: 'app-allocated-devices-table',
  templateUrl: './allocated-devices-table.component.html',
  styleUrls: ['./allocated-devices-table.component.css']
})

export class AllocatedDevicesTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'address', 'maximumHourlyEnergyConsumption'];
  dataSource: Device[] = [];

  constructor(private allocatedDevicesTableService: AllocatedDevicesTableService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllAllocatedDevices(this.route.snapshot.params['id'])
  }

  getAllAllocatedDevices(userId: string) {
    this.allocatedDevicesTableService.findDevicesOfUser(userId).subscribe(devices =>{
      this.dataSource = devices;
    })
  }

  openEnergiesChart(id: string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };

    dialogConfig.height = '90%'
    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    this.dialog.open(TimestampEnergyConsumptionChartComponent, dialogConfig)
  }

}
