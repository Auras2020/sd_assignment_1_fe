import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User{
  id: string,
  name: string,
  email: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class UserTableService {

  url = environment.apiUrl
  users =  environment.apiEndpoints.users
  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url + this.users)
  }

  getClients(): Observable<User[]>{
    const clients =  environment.apiEndpoints.clients
    return this.http.get<User[]>(this.url + clients)
  }

  deleteUser(id: string): Observable<null> {
    return this.http.delete<null>(this.url + this.users + id)
  }

  createUser(user: any): Observable<User> {
    return this.http.put<User>(this.url + this.users, user)
  }

  updateuser(user: any) {
    return this.http.post<User>(this.url + this.users, user)
  }
}
