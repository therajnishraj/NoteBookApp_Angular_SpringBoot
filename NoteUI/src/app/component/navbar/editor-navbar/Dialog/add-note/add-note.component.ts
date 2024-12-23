import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditNoteComponent } from 'src/app/component/note/dialog/edit-note/edit-note.component';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public value: any,
    public dialogRef: MatDialogRef<EditNoteComponent>,) {
    this.createForm();

  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required,]],
      content: ['', [Validators.required,]],
    });
  }

  ngOnInit(): void {
  }


  addnote() {
    let note = {
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
    }
    this.noteService.addNote(note).subscribe((data: any) => {
      this.getNoteList();
      this.dialogRef.close()

      console.log(data);
      this._snackBar.open("Created..!", "Close", {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return
    })
  }

  getNoteList() {
    this.noteService.getAllNotesList().subscribe((data: any) => {
      console.log(data);
      this.noteService.dataSource = data;
    })
  }

  close() {
    this.dialogRef.close();
  }


}
