import { Component, OnInit } from '@angular/core';
import {User, UserTableService} from "./user-table.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {CreateUserComponent} from "./create-user/create-user.component";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = ['edit', 'name', 'email', 'role', 'delete'];
  dataSource: User[] = [];

  constructor(private userTableService: UserTableService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userTableService.getUsers().subscribe(users =>{
      this.dataSource = users;
    })
  }

  openUserDialog(element?: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      element
    };

    dialogConfig.width = '550px'
    dialogConfig.height = '65%'
    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(CreateUserComponent, dialogConfig )

    dialogRef.afterClosed().subscribe(
      status => {
        if (status) {
          this.getAllUsers()
        }
      }
    );
  }

  openDeleteUserDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };

    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(DeleteUserComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(
      status => {
        if (status) {
          this.getAllUsers()
        }
      }
    );
  }

}
