import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from './Dialog/change-password/change-password.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddNoteComponent } from './Dialog/add-note/add-note.component';
import { SearchNoteComponent } from './Dialog/search-note/search-note.component';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-editor-navbar',
  templateUrl: './editor-navbar.component.html',
  styleUrls: ['./editor-navbar.component.scss']
})
export class EditorNavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
  }
  goToDashbord() {
    this.router.navigate(['editor/editorDashbord']);
  }
  logOut() {
    sessionStorage.clear()
    this.router.navigate(['login']);
  }

  changePassord() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

  addNote() {
    const dialogRef = this.dialog.open(AddNoteComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
  search() {


    const dialogRef = this.dialog.open(SearchNoteComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });

  }

  refresh() {
    this.noteService.getAllNotesList().subscribe((data: any) => {
      this.noteService.dataSource = data
      return
    })
  }

}
