package com.app.note.repo;

import com.app.note.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NoteRepo extends MongoRepository<Note, String> {
}
