import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CREATE_USER, CHANGE_PASSWOD, FORGOT_PASSWORD } from '../utility/common-component/common-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  creatUser(note:any) {
    return this.http
      .post<any>(CREATE_USER,note )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }

  changePassword(note :any) {
    return this.http
      .post<any[]>(CHANGE_PASSWOD,note )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }

  forgotPassword(note :any) {
    return this.http
      .post<any>(FORGOT_PASSWORD,note )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }
}
