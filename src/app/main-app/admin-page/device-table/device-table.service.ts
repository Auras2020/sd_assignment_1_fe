import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Device{
  id: string,
  name: string,
  description: string,
  address: string,
  maximumHourlyEnergyConsumption: number,
  userName: string
}

@Injectable({
  providedIn: 'root'
})
export class DeviceTableService {

  url = environment.apiUrl
  devices =  environment.apiEndpoints.devices
  constructor(private http: HttpClient) {

  }

  getDevices(): Observable<Device[]>{
    return this.http.get<Device[]>(this.url + this.devices)
  }

  deleteDevice(id: string): Observable<null> {
    return this.http.delete<null>(this.url + this.devices + id)
  }

  createDevice(device: any): Observable<Device> {
    return this.http.put<Device>(this.url + this.devices, device)
  }

  updateDevice(device: any) {
    return this.http.post<Device>(this.url + this.devices, device)
  }

  findDevice(id: string): Observable<Device>{
    const name = environment.apiEndpoints.name
    return this.http.get<Device>(this.url + name + id)
  }

  allocateDevice(allocateDeviceBody: any) {
    const allocate = environment.apiEndpoints.allocate
    return this.http.post(this.url + allocate, allocateDeviceBody)
  }

  reallocateDevice(reallocateDeviceBody: any) {
    const reallocate = environment.apiEndpoints.reallocate
    return this.http.post(this.url + reallocate, reallocateDeviceBody)
  }

  deallocateDevice(id: string) {
    const deallocate = environment.apiEndpoints.deallocate
    const body ={
      deviceId: id
    }
    return this.http.post(this.url + deallocate, body)
  }
}
