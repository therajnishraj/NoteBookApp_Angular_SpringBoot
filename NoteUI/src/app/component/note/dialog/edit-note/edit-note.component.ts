import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  noteData: any;
  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public noteService: NoteService,
    @Inject(MAT_DIALOG_DATA) public value: any,
    public dialogRef: MatDialogRef<EditNoteComponent>,) {
    this.noteData = value;
    console.log(this.noteData);
    this.createForm();
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.form.patchValue({
      id: this.noteData.id,
      title: this.noteData.title,
      content: this.noteData.content,
      createdAt: this.noteData.createdAt,
      updatedAt: this.noteData.updatedAt
    });
  }
  createForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required,]],
      title: ['', [Validators.required,]],
      content: ['', [Validators.required,]],
      createdAt: ['', [Validators.required,]],
      updatedAt: ['', [Validators.required,]],
    });
  }

  updateNote() {
    let note = {
      id: this.form.controls.id.value,
      title: this.form.controls.title.value,
      content: this.form.controls.content.value,
      createdAt: this.form.controls.createdAt.value,
      updatedAt: this.form.controls.updatedAt.value,
    }
    this.noteService.updateNote(note.id, note).subscribe((data: any) => {
      this.dialogRef.close()
      console.log(data);
      this._snackBar.open("Updated..!", "Close", {
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
