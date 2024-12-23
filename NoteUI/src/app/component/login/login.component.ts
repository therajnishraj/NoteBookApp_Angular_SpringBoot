import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    public authenticationService:AuthenticationServiceService,
    public _snackBar:MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog:MatDialog
  ) { }

  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword; 
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      userId: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  submit() {
    if (this.form.invalid) {
      this._snackBar.open("Invalid Form", "Close", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }
    (this.authenticationService.authenticate(this.form.controls.userId.value, this.form.controls.password.value,'qc_portal',0).subscribe(
      (data: any) => {
        if(data?.data?.failure=="user is not authorized to access the resource..!!"){
          this._snackBar.open(data.data.failure, "Close", {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          return ;
        }
        if(data.success=='false'){
          this._snackBar.open("Invalid user or password..!", "Close", {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }else{
          sessionStorage.setItem("token",data.token)
          this.router.navigate(['note'])
        }
      },
      (error: any) => {
        console.error(error);
        this._snackBar.open("Unauthorize User", "Close", {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    )
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

  openCreateUser(){
    const dialogRef = this.dialog.open(CreateUserComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
