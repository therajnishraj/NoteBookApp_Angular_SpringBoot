package com.app.note.security;

import com.app.note.model.User;
import com.app.note.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Developed By Rajnish Raj
 */
@Service
public class LoginUserDetailsService implements UserDetailsService {
    @Autowired
    UserService userService;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User myuser=userService.validateUser(username);
        return myuser;
    }
}
