import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate')
    return true;
  }
  canLoad(): Observable<boolean>  | boolean  {
    console.log('canLoad')
    return true;
  }
}
