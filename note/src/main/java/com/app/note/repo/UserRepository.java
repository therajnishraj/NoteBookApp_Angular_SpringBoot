package com.app.note.repo;

import com.app.note.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);

}
