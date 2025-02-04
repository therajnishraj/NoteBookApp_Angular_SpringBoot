import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CommonComponentModule } from 'src/app/utility/common-component/common-component.module';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonComponentModule,
  ]
})
export class LoginModule { }
