package com.schedule.servingwebcontent;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


class Test {
    public boolean state;
}

@RestController
public class RequestController {
    @RequestMapping("/api")
    public String checkLogin(@RequestParam(name = "login", required = true) String login,
                           @RequestParam(name = "password", required = true) String password,
                           Model model) {
        System.out.println(login);
        System.out.println(password);
        Test a = new Test();
        a.state = true;
        return "true";
    }
}
