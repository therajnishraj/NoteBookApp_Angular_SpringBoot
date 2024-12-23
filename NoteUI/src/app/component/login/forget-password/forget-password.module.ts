import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import { CommonComponentModule } from 'src/app/utility/common-component/common-component.module';


@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    ForgetPasswordRoutingModule
  ]
})
export class ForgetPasswordModule { }
