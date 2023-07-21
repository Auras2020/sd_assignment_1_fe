import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DeviceTableService} from "../../device-table/device-table.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User, UserTableService} from "../user-table.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    }
  )

  edit?: boolean;
  title: string = 'Add new user';
  roles: string[] = ['ADMIN', 'CLIENT']

  constructor(private userTableService: UserTableService,
              private dialogRef: MatDialogRef<CreateUserComponent>,
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
      this.title = "Edit user"
    }
  }

  saveUser() {
    if (this.edit) {
      this.userTableService.updateuser(this.form.value).subscribe(res => {
        this.dialogRef.close(true);
      })
    } else {
      this.userTableService.createUser(this.form.value).subscribe(res => {
        this.dialogRef.close(true);
      })
    }
  }

  get nameControl(){
    return this.form.controls['name']
  }

  get emailControl(){
    return this.form.controls['email']
  }

  get roleControl(){
    return this.form.controls['role']
  }

}
