import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ADD_NOTE, DELETE_NOTE, GET_ALL_NOTES_LIST, GET_NOTE_BY_ID, UPDATE_NOTE } from '../utility/common-component/common-url';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  dataSource:any;
  constructor(private http:HttpClient) { }

  getAllNotesList() {
    return this.http
      .get<any[]>(GET_ALL_NOTES_LIST )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }

  updateNote(id:any,node:any) {
    return this.http
      .put<any[]>(UPDATE_NOTE+id,node )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }

  deleteNote(id:any) {
    return this.http
      .delete<any[]>(DELETE_NOTE+id )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }

  addNote(node :any) {
    return this.http
      .post<any[]>(ADD_NOTE,node )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }
  searchNote(id :any) {
    return this.http
      .get<any[]>(GET_NOTE_BY_ID+id )
      .pipe(
        map(respone => {
          return respone;
        })
      );
  }
}
