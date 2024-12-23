import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthgrardServiceService {




  currentUrl: any = '';
  public location: Location;
  previousUrl: any = this.currentUrl;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    location: Location
  ) {
    this.location = location;
    console.log(this.location.prepareExternalUrl(this.location.path()));
    let currentPath = this.location.prepareExternalUrl(this.location.path());
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const url: string = state.url;
    if (!this.checkLogin()) {
      this.router.navigateByUrl("/login");
    }
    return true;
  }
  checkLogin(): Boolean {
    if (this.authenticationService.isUserLoggedIn()) {
      return true
    }
    return false;
  }
}
