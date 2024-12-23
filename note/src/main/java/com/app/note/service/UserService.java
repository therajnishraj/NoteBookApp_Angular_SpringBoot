package com.app.note.service;

import com.app.note.model.Note;
import com.app.note.model.User;
import com.app.note.repo.UserRepository;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String signup(User user) {
        // Hash the password before saving it
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        
        User savedUser = userRepository.save(user);
        return "User registered successfully!";
    }


   public User createUser(User user) {
       return userRepository.save(user);
   }
    public User validateUser(String name) {
        Optional<User> u = userRepository.findByUsername(name);
        return u.get();
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        Optional<User> u = userRepository.findByUsernameAndPassword(username, password);
        return u.get();
    }

    public String createPassword(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            User existingUser = user.get();
            existingUser.setPassword(password);
            userRepository.save(existingUser);
            return "Password created successfully!";
        }
        return "User not found!";
    }

    public String changePassword(JSONObject request) {
        Optional<User> user = userRepository.findByUsername(request.get("username").toString());
        if (user.isPresent()) {
            User existingUser = user.get();

            // Verify old password
            if (request.get("oldPassword").toString().equals(existingUser.getPassword())) {
                existingUser.setPassword(request.get("newPassword").toString());
                userRepository.save(existingUser);
                return "Password updated successfully!";
            } else {
                return "Old password is incorrect!";
            }
        }
        return "User not found!";
    }
}
