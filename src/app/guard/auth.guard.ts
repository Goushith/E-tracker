import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private route:Router)  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : boolean  {

      if(!this.auth.isloggedIn()){
        this.route.navigate(['login'])
        return false
      }
      return this.auth.isloggedIn();
  }
  
}
