import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor{

  constructor(private router: Router, private _snackBar: MatSnackBar) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {


    if (sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          'Authorization': "Bearer " + sessionStorage.getItem('token') as any,
        }
      })
    }
    

    return next.handle(req).pipe(tap(
      event => event instanceof HttpResponse ? 'succeeded' : '',
      err => {
        if (err.status == 401 || err.status == 401) {
          this._snackBar.open("Session Expired", "Close", {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          if (this.router.url != "/login") {
            sessionStorage.clear();
            this.router.navigateByUrl("/login")
            location.reload();
          }
        }
        console.log(err);
      }
    ),
      catchError((error: HttpErrorResponse) => {
        console.error("Interceptor Log: " + error.message);
        if (error.status == 401) {
          console.log("B");
          this._snackBar.open("Session Expired", "Close", {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          if (this.router.url != "/login") {
            sessionStorage.clear();
            this.router.navigateByUrl("/login")
            location.reload();
          }
        }
        if (error.status == 200) {
          of([]);
        }
        return throwError(error);
      })
    )

  }
}
