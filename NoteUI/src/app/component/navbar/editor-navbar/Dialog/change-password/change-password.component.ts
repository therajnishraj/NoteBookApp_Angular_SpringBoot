import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/utility/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,

    public userService:UserService) {
      this.createForm();
     }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.formBuilder.group({
      oldPassword: ['', [Validators.required,]],
      newPassword: ['', [Validators.required, ]],
      confirmPassword: ['', [Validators.required,]],
    });
  }

  changePassword(){
    let json={
      "username":sessionStorage.getItem('pcmcUserName'),
      "oldPassword":this.form.controls.oldPassword.value,
      "newPassword":this.form.controls.newPassword.value,
    };
    if(this.form.controls.newPassword.value!=this.form.controls.confirmPassword.value){
      this._snackBar.open("New password and confirm password not matched..!", "Close", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return
    }
    this.userService.changePassword(json).subscribe((data: any) => {
      this.dialogRef.close()
      console.log(data);
        this._snackBar.open(data.message, "Close", {
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


