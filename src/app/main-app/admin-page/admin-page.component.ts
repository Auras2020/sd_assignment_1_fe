import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  btnDevices?: string = 'btn-selected';
  btnUsers?: string = 'btn-default';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['admin', 'devices'])
  }

  onClickDevicesBtn() {
    this.btnDevices = 'btn-selected';
    this.btnUsers = 'btn-default';
    this.router.navigate(['admin', 'devices']);
  }

  onClickUsersBtn() {
    this.btnDevices = 'btn-default';
    this.btnUsers = 'btn-selected';
    this.router.navigate(['admin', 'users']);
  }

}
