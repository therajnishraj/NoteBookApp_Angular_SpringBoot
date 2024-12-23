import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.scss']
})
export class SearchNoteComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public noteService: NoteService,
    public userService: UserService) { this.createForm(); }
  createForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required,]]
    });
  }
  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

  searchNote() {
    this.noteService.searchNote(this.form.controls.id.value).subscribe((data: any) => {
      let items: any[] = [];
      this.dialogRef.close()
      items.push(data.data);
      this.noteService.dataSource = items

      console.log(data);
      return
    })
  }



}
