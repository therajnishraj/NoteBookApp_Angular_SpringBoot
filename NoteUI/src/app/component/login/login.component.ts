import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationStart, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    public authenticationService: AuthenticationServiceService,
    public _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private loaderService: NgxSpinnerService
  ) {}

  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/note']);
    }
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  submit() {
    this.loaderService.show();
    if (this.form.invalid) {
      this.loaderService.hide();

      this._snackBar.open('Invalid Form', 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }
    this.authenticationService
      .authenticate(
        this.form.controls.userId.value,
        this.form.controls.password.value,
        'qc_portal',
        0
      )
      .subscribe(
        (data: any) => {
          this.loaderService.hide();

          if (
            data?.data?.failure ==
            'user is not authorized to access the resource..!!'
          ) {
            this._snackBar.open(data.data.failure, 'Close', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            return;
          }
          if (data.success == 'false') {
            this.loaderService.hide();

            this._snackBar.open('Invalid user or password..!', 'Close', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          } else {
            this.loaderService.hide();

            sessionStorage.setItem('token', data.token);
            this.router.navigate(['note']);
          }
        },
        (error: any) => {
          this.loaderService.hide();

          console.error(error);
          this._snackBar.open('Unauthorize User', 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
  }

  openForgetPassword() {
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  openCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
