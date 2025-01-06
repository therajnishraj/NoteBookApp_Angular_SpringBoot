import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
// import { API_AUTH_AUTHENTICATE, API_AUTH_CHANGE_PASSWORD, API_AUTH_AUTHENTICATE_RESET, API_AUTH_CHECK_EXPIRATION, API_FORGET_PASSWORD } from "./common-component/common-url";


@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private router: Router, private httpClient: HttpClient) {
  }

/*   authenticate(username: string, password: string) {
    return this.httpClient
      .post<any>(API_AUTH_AUTHENTICATE, { username, password })
      .pipe(
        map(userData => {
          return userData;
        })
      );
  } */


/*   forgetPassword(data: any): any {
    return this.httpClient
      .post<any>(API_FORGET_PASSWORD, data )
      .pipe(
        map(userData => {
          return userData;
        })
      );
  } */

  getUserName(): string {
    return sessionStorage.getItem('kvicUserName') as string;
  }

  setUserName(val: string) {
    sessionStorage.setItem('kvicUserName', val);
  }

  /* changePassword(data:any) {
    let username = this.getUserName();
    return this.httpClient
      .post<any>(API_AUTH_CHANGE_PASSWORD, data)
      .pipe(
        map(response => {
          return response;
        })
      );
  } */

/*   resetPassword(tempPassword: any, newPassword: any, username: any, emailId: any) {
    return this.httpClient
      .post<any>(API_AUTH_AUTHENTICATE_RESET, { tempPassword, newPassword, username, emailId })
      .pipe(
        map(response => {
          return response;
        })
      );
  } */

  /* checkTokenExpiration() {
    return this.httpClient
      .post<any>(API_AUTH_CHECK_EXPIRATION, {})
      .pipe(
        map(userData => {
          return userData;
        })
      );
  } */

  isUserLoggedIn() {
    let user = this.getUserName();
    return !(user === null);
  }


}