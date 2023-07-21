import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceTableService} from "../device-table.service";

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-device.component.html',
  styleUrls: ['./delete-device.component.css']
})
export class DeleteDeviceComponent implements OnInit {

  id:string = ''

  constructor(private dialogRef: MatDialogRef<DeleteDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) data: any,
              private deviceTableService: DeviceTableService) {
    if (data.id) {
      this.id = data.id
    }
  }

  ngOnInit(): void {
  }

  deleteDevice(){
    this.deviceTableService.deleteDevice(this.id).subscribe(()=>{
      this.dialogRef.close(true);
    })
  }
}
