package com.app.note.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        // Provide a custom error page or return a custom message
        return "custom-error";  // The name of your custom error page view (e.g., error.html)
    }


}
