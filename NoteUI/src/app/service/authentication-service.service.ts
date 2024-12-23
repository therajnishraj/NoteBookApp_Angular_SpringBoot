import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LOGIN } from '../utility/common-component/common-url';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpClient:HttpClient
    ) { }
  
    authenticate(username: string, password: string,apptype:string,prjId:any) {
      this.setUserName(username);
      return this.httpClient
        .post<any>(LOGIN, { username, password,apptype,prjId })
        .pipe(
          map((response:any) => {
            return response;
          })
        );
    }
   
  
    setUserName(val: string) {
      sessionStorage.setItem('pcmcUserName', val);
    }
  
    isUserLoggedIn() {
      let user = sessionStorage.getItem("token");
      return !(user === null);
      return true
    }
  
    getUserName(): string {
      return sessionStorage.getItem('pcmcUserName') as string;
    }
}
