import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeviceTableComponent} from "../admin-page/device-table/device-table.component";
import {UserTableComponent} from "../admin-page/user-table/user-table.component";
import {AdminPageComponent} from "../admin-page/admin-page.component";
import {ClientPageComponent} from "../client-page/client-page.component";
import {AllocatedDevicesTableComponent} from "../client-page/allocated-devices-table/allocated-devices-table.component";
import {AuthentificationPageComponent} from "../authentification-page/authentification-page.component";
import {MainAppComponent} from "../main-app.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {AuthGuard} from "../../authorization/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: 'login',
        component: AuthentificationPageComponent
      },
      {
        path: 'register',
        component: AuthentificationPageComponent
      },
      {
        path: 'admin',
        component: AdminPageComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'devices',
            component: DeviceTableComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'users',
            component: UserTableComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'client',
        component: ClientPageComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'allocated-devices/:id',
            component: AllocatedDevicesTableComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
