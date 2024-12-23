import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { EditNoteComponent } from './dialog/edit-note/edit-note.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponentModule } from 'src/app/utility/common-component/common-component.module';


@NgModule({
  declarations: [
  
    EditNoteComponent,
    EditNoteComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule
  ]
})
export class NoteModule { }
