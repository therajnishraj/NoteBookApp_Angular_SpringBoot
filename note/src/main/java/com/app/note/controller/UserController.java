package com.app.note.controller;

import com.app.note.model.User;
import com.app.note.security.JwtUtilService;
import com.app.note.security.LoginUserDetailsService;
import com.app.note.service.UserService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
@CrossOrigin(origins = "")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserService userService;
    @Autowired
    LoginUserDetailsService loginUserDetailsService;
    @Autowired
    JwtUtilService jwtUtilService;
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody JSONObject user) {
        JSONObject jsonObject=new JSONObject();
        User myuser=userService.validateUser(user.get("username").toString());
        if(Objects.isNull(myuser)){
            jsonObject.put("Error","Invalid Username Or Password");
            jsonObject.put("success",false);
            return  new ResponseEntity(jsonObject, HttpStatus.OK);
        }

        try {
            org.springframework.security.core.Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.get("username"), user.get("password").toString()));

        } catch (UsernameNotFoundException e) {
            e.printStackTrace();
        }
            UserDetails userDetails=loginUserDetailsService.loadUserByUsername(user.get("username").toString());

        jsonObject.put("token",jwtUtilService.generateToken(userDetails));
        jsonObject.put("success",true);
//        jsonObject.put("usertype",userService.getUserType(user.getName()));
        //find usertype
        return new ResponseEntity(jsonObject, HttpStatus.OK);
    }
    @RequestMapping(value = "/createUser", method = RequestMethod.POST)
    public ResponseEntity createUser(@RequestBody User user) {
        return new ResponseEntity(userService.createUser(user), HttpStatus.OK);
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity forgotPassword(@RequestBody JSONObject request) {
        JSONObject jsonObject=new JSONObject();
        String response = userService.createPassword(request.get("username").toString(), request.get("newPassword").toString());
        jsonObject.put("message",response);
        return new ResponseEntity( jsonObject,  HttpStatus.OK);
    }

    @PostMapping("/changePassword")
    public ResponseEntity changePassword(@RequestBody JSONObject request) {
        JSONObject jsonObject=new JSONObject();
        String response = userService.changePassword(request);
        jsonObject.put("message",response);
        return new ResponseEntity(jsonObject,HttpStatus.OK);
    }

}
