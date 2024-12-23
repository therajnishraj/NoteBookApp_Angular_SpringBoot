import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgrardServiceService } from './service/authgrard-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NoteComponent } from './component/note/note.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: NoteComponent,
    children: [
      {
        path: 'note',
        loadChildren: () => import('src/app/component/note/note.module').
          then(m => m.NoteModule),
          canActivate: [AuthgrardServiceService],
      }
    ]
  }
  , {
    path: 'login',
    loadChildren: () => import('src/app/component/login/login.module').then(m => m.LoginModule),
  },
 
  { path: 'forget-password', loadChildren: () => import('./component/login/forget-password/forget-password.module').then(m => m.ForgetPasswordModule) }, {
    path: '**',
    loadChildren: () => import('src/app/component/login/login.module').then(m => m.LoginModule)
  },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true
  }),
  BrowserModule],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
