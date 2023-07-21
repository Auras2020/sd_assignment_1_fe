import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { MainAppComponent } from '../main-app.component';
import {DeviceTableComponent} from "../admin-page/device-table/device-table.component";
import {UserTableComponent} from "../admin-page/user-table/user-table.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {AdminPageComponent} from "../admin-page/admin-page.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {DeleteDeviceComponent} from "../admin-page/device-table/delete-device/delete-device.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClientPageComponent} from "../client-page/client-page.component";
import {AuthentificationPageComponent} from "../authentification-page/authentification-page.component";
import {MatInputModule} from "@angular/material/input";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    MainAppComponent,
    DeviceTableComponent,
    UserTableComponent,
    AdminPageComponent,
    ClientPageComponent,
    AuthentificationPageComponent,
    DeleteDeviceComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainAppRoutingModule,
    RouterModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    MainAppRoutingModule
  ],
  bootstrap: [MainAppComponent]
})
export class MainAppModule { }
