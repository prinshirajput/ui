import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../authservice/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardadmin implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    {
      if(localStorage.getItem('role')=='admin')
      {
        return true;
      }
      else
    { 
      return false;
    }
  }
  
  }
}