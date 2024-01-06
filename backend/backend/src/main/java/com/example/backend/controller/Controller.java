package com.example.backend.controller;

import com.example.backend.service.CompileException;
import com.example.backend.service.DynamicDebugger;
import com.example.backend.service.DynamicExecutor;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @PostMapping("/runCode")
    public Response runCode(@RequestBody Code code) {
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
        System.out.println(response.getMessage());
        return response;
    }

    @PostMapping("/debugCode")
    public Response debugCode(@RequestBody Code code) {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            dynamicDebugger.debug(code);
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
        System.out.println(response.getMessage());
        return response;
    }
}
