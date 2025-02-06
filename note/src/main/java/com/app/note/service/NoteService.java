package com.app.note.service;

import com.app.note.model.Note;
import com.app.note.repo.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    private NoteRepo noteRepo;

    public Note create(Note note) {
        return noteRepo.save(note);
    }

    public List<Note> getAll() {
        return noteRepo.findAll();
    }

    public Optional<Note> getById(String id) {
        return noteRepo.findById(id);
    }

    public Note update(String id, Note modelData) {
        noteRepo.findById(id);
        if (noteRepo.existsById(id)) {
            modelData.setId(id);
            modelData.setUpdatedAt(Instant.now());
            return noteRepo.save(modelData);
        }
        return null;
    }

    public boolean delete(String id) {
        if (noteRepo.existsById(id)) {
            noteRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
