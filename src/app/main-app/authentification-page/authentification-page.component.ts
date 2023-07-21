import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-authentification-page',
  templateUrl: './authentification-page.component.html',
  styleUrls: ['./authentification-page.component.css']
})
export class AuthentificationPageComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.openLoginDialog()
  }

  openLoginDialog(){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '350px'
    dialogConfig.height = '51%'
    dialogConfig.autoFocus = false
    dialogConfig.disableClose = true;

    this.dialog.open(LoginComponent, dialogConfig)

  }

}
