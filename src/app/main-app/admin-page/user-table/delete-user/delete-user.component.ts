import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceTableService} from "../../device-table/device-table.service";
import {User, UserTableService} from "../user-table.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id:string = ''

  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) data: any,
              private userTableService: UserTableService) {
    if (data.id) {
      this.id = data.id
    }
  }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userTableService.deleteUser(this.id).subscribe(()=>{
      this.dialogRef.close(true);
    })
  }

}
