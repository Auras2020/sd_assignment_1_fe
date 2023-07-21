import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const { routeConfig } = route;

    const { path } = routeConfig as Route;

    if(this.router.url.includes('login') || this.router.url.includes('admin')){
      return true
    }

    if(path === 'client' || path === 'admin'){
      this.router.navigate(['/**'])
      return false
    }

    this.router.navigate(['/**'])
    return false

  }

}
