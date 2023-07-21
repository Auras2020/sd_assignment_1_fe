import {Component, OnInit} from '@angular/core';
import {Device, DeviceTableService} from "./device-table.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteDeviceComponent} from "./delete-device/delete-device.component";
import {CreateDeviceComponent} from "./create-device/create-device.component";
import {User, UserTableService} from "../user-table/user-table.service";

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})

export class DeviceTableComponent implements OnInit {
  displayedColumns: string[] = ['edit', 'name', 'description', 'address', 'maximumHourlyEnergyConsumption', 'allocated employee', 'delete'];
  dataSource: Device[] = [];
  clients: User[] = [];
  list: boolean[] = []

  constructor(private deviceTableService: DeviceTableService,
              private userTableService: UserTableService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllDevices()
    this.getAllClients()
  }

  getAllDevices() {
    this.deviceTableService.getDevices().subscribe(devices =>{
      this.dataSource = devices;
    })
  }

  getAllClients(){
    this.userTableService.getClients().subscribe(clients =>{
      this.clients = clients;
    })
  }

  openDeviceDialog(element?: Device) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      element
    };

    dialogConfig.width = '550px'
    dialogConfig.height = '80%'
    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(CreateDeviceComponent, dialogConfig )

    dialogRef.afterClosed().subscribe(
      status => {
        if (status) {
          this.getAllDevices();
        }
      }
    );
  }

  openDeleteDeviceDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };

    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(DeleteDeviceComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      status => {
        if (status) {
          this.getAllDevices();
        }
      }
    );
  }

  allocateDevice(userId: string, deviceId: string) {
    const allocateDeviceBody = {
      userId: userId,
      deviceId: deviceId
    }
    if(userId && deviceId){
      this.deviceTableService.allocateDevice(allocateDeviceBody).subscribe(() => {
        this.getAllDevices()
      })
    }
  }

  reallocateDevice(userId: string, deviceId: string) {
    const reallocateDeviceBody = {
      userId: userId,
      deviceId: deviceId
    }
    if(userId && deviceId){
      this.deviceTableService.reallocateDevice(reallocateDeviceBody).subscribe(() => {
        this.getAllDevices()
      })
    }
  }

  deallocateDevice(deviceId: string){
    if(deviceId){
      this.deviceTableService.deallocateDevice(deviceId).subscribe(() => {
        this.getAllDevices()
      })
    }
  }

}
