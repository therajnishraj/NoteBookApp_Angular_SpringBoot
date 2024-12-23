import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/utility/authentication.service';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    public dialog: MatDialog, private loaderService: NgxSpinnerService,
  ) {
    this.loaderService.show();
    this.createForm();
  }

  ngOnInit(): void {
    this.loaderService.hide();
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirmpwd: ['', [Validators.required, Validators.minLength(2)]],
    });
  }



  createUser() {
    this.loaderService.show();
    if (this.form.controls.password.value != this.form.controls.confirmpwd.value) {
      this._snackBar.open("Password and confirm password should be same..!", "Close", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this.loaderService.hide()
      return
    }
    let user = {
      username: this.form.controls.username.value,
      password: this.form.controls.password.value
    }
    this.userService.creatUser(user).subscribe((data: any) => {
      this.loaderService.hide();
      this.dialogRef.close()
      console.log(data);
      this._snackBar.open("User created successfully..!", "Close", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return
    })
  }

  close() {
    this.dialogRef.close();
  }
}
