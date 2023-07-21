import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Device} from "../../admin-page/device-table/device-table.service";
import {HttpClient} from "@angular/common/http";

export interface ChartDTO{
  name: number,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class AllocatedDevicesTableService {

  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  findDevicesOfUser(userId: string): Observable<Device[]>{
    const findDevices =  environment.apiEndpoints.findDevices
    return this.http.get<Device[]>(this.url + findDevices + userId)
  }

  findCharts(chartBody: any): Observable<ChartDTO[]>{
    const chart = environment.apiEndpoints.chart
    return this.http.post<ChartDTO[]>(this.url + chart, chartBody)
  }
}
