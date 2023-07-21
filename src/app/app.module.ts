import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MainAppModule} from "./main-app/main-app/main-app.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { CreateDeviceComponent } from './main-app/admin-page/device-table/create-device/create-device.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { CreateUserComponent } from './main-app/admin-page/user-table/create-user/create-user.component';
import { DeleteUserComponent } from './main-app/admin-page/user-table/delete-user/delete-user.component';
import {MatSelectModule} from "@angular/material/select";
import { AllocatedDevicesTableComponent } from './main-app/client-page/allocated-devices-table/allocated-devices-table.component';
import { TimestampEnergyConsumptionChartComponent } from './main-app/client-page/allocated-devices-table/timestamp-energy-consumption-chart/timestamp-energy-consumption-chart.component';
import { LoginComponent } from './main-app/authentification-page/login/login.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    CreateDeviceComponent,
    CreateUserComponent,
    DeleteUserComponent,
    AllocatedDevicesTableComponent,
    TimestampEnergyConsumptionChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MainAppModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxChartsModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
