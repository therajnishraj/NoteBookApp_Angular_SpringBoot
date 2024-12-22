package com.app.note.controller;

import com.app.note.model.Note;
import com.app.note.service.NoteService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/note")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @RequestMapping(value = "/addNote", method = RequestMethod.POST, produces = "application/json")
    public Note create(@RequestBody Note note) {
        return noteService.create(note);
    }

    @RequestMapping(value = "/getAllNote", method = RequestMethod.GET, produces = "application/json")
    public List<Note> getAll() {
        return noteService.getAll();
    }

    @RequestMapping(value = "/getNoteById/{id}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getById(@PathVariable String id) {
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("data",noteService.getById(id));
        return new ResponseEntity( jsonObject,  HttpStatus.OK);
    }

    @RequestMapping(value = "/updateNoteById/{id}", method = RequestMethod.PUT, produces = "application/json")
    public Note update(@PathVariable String id, @RequestBody Note modelData) {
        return noteService.update(id, modelData);
    }

    @DeleteMapping("/{id}")
    @RequestMapping(value = "/deleteNoteById/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public boolean delete(@PathVariable String id) {
        return noteService.delete(id);
    }
}
