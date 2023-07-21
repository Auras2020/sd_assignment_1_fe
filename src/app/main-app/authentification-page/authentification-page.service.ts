import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export interface Credentials{
  id: string,
  email: string,
  password: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationPageService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    const url = environment.apiUrl
    const login = environment.apiEndpoints.login
    return this.http.post<Credentials>(url + login, credentials)
  }

  register(credentials: any) {
    const url = environment.apiUrl
    const register = environment.apiEndpoints.register
    return this.http.post<Credentials>(url + register, credentials)
  }
}
