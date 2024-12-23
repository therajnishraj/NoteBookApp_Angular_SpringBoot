import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { NoteService } from 'src/app/service/note.service';
import { EditNoteComponent } from './dialog/edit-note/edit-note.component';


export interface PeriodicElement {
  id: number;
  title: String;
  content: String;
  createdAt: string;
  updatedAt: string;
}



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'content', 'createdAt', 'updatedAt', 'actions'];

  constructor(public noteService: NoteService,
    private loaderService: NgxSpinnerService,
    public _snackBar: MatSnackBar,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getNoteList();
  }

  getNoteList() {


    this.noteService.getAllNotesList().subscribe((data: any) => {
      console.log(data);
      this.noteService.dataSource = data;
    })
  }
  onEdit(event: any) {
    const dialogRef = this.dialog.open(EditNoteComponent, {
      autoFocus: true,
      panelClass: 'custom-dialog',
      data: event,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.getNoteList();
    });
  }
  onDelete(event: any) {
    this.noteService.deleteNote(event.id).subscribe((data: any) => {
      if (data) {
        this._snackBar.open("Deleted..!", "Close", {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.getNoteList();
      } else {
        this._snackBar.open("Something went wrong..!", "Close", {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        return
      }
    })
  }



}
