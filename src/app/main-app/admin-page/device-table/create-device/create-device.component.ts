import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DeviceTableService} from "../device-table.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    address: new FormControl('', Validators.required),
    maximumHourlyEnergyConsumption: new FormControl(null, {
      validators: [Validators.required, Validators.min(0.1)]
    })
    }
  );

  edit?: boolean;
  title: string = 'Add new device';

  constructor(private deviceTableService: DeviceTableService,
              private dialogRef: MatDialogRef<CreateDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.edit = false
    if(data.element){
      this.edit = true
      this.form.patchValue(data.element);
    } else {
      this.edit = false;
    }
  }

  ngOnInit(): void {
    if(this.edit) {
      this.title = "Edit device"
    }
  }

  saveDevice() {
    if (this.edit) {
      this.deviceTableService.updateDevice(this.form.value).subscribe(res => {
        this.dialogRef.close(true);
      })
    } else {
      this.deviceTableService.createDevice(this.form.value).subscribe(res => {
        this.dialogRef.close(true);
      })
    }
  }

  get nameControl(){
    return this.form.controls['name']
  }

  get addressControl(){
    return this.form.controls['address']
  }

  get maximumHourlyEnergyConsumptionControl(){
    return this.form.controls['maximumHourlyEnergyConsumption']
  }
}
