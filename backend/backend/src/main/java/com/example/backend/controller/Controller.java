package com.example.backend.controller;

import com.example.backend.service.CompileException;
import com.example.backend.service.DynamicExecutor;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @PostMapping("/sendCode")
    public Response sendCode(@RequestBody Code code) {
        System.out.println(code.getContext());
        Response response = new Response().setCode(200);
        try {
            String output=DynamicExecutor.execute(code.getContext());
            response.setMessage(output);
        } catch (Exception e) {
            if(e instanceof CompileException){
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            }else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        return response;
    }
}
