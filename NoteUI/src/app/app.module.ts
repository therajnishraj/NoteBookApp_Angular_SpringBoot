import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from './utility/common-component/common-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlService } from './service/url.service';
import { BasicAuthInterceptorService } from './utility/basic-auth-interceptor.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChangePasswordComponent } from './component/navbar/editor-navbar/Dialog/change-password/change-password.component';
import { NoteComponent } from './component/note/note.component';
import { AddNoteComponent } from './component/navbar/editor-navbar/Dialog/add-note/add-note.component';
import { SearchNoteComponent } from './component/navbar/editor-navbar/Dialog/search-note/search-note.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
   NoteComponent,
   AddNoteComponent,
   SearchNoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



