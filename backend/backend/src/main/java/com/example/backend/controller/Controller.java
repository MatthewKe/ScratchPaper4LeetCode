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
            String output = DynamicExecutor.execute(code.getContext());
            response.setMessage(output);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        System.out.println(response);
        return response;
    }

    @PostMapping("/debugCode")
    public Response debugCode(@RequestBody Code code) {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            DebugInfo debugInfo = dynamicDebugger.debug(code);
            response.setDebugInfo(debugInfo);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
            System.out.println(e);
        }
        System.out.println(response);
        return response;
    }

    //cont: 继续执行程序，直到遇到下一个断点。
    @GetMapping("/cont")
    public Response cont() {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            DebugInfo debugInfo = dynamicDebugger.cont();
            response.setDebugInfo(debugInfo);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        System.out.println(response);
        return response;
    }

    @GetMapping("/step")
    public Response step() {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            DebugInfo debugInfo = dynamicDebugger.step();
            response.setDebugInfo(debugInfo);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        System.out.println(response);
        return response;
    }

    @GetMapping("/next")
    public Response next() {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            DebugInfo debugInfo = dynamicDebugger.next();
            response.setDebugInfo(debugInfo);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        System.out.println(response);
        return response;
    }

    @GetMapping("/stepUp")
    public Response stepUp() {
        Response response = new Response().setCode(200);
        try {
            DynamicDebugger dynamicDebugger = DynamicDebugger.getDynamicDebugger();
            DebugInfo debugInfo = dynamicDebugger.stepUp();
            response.setDebugInfo(debugInfo);
        } catch (Exception e) {
            if (e instanceof CompileException) {
                response
                        .setMessage(e.getMessage())
                        .setCode(400);
            } else {
                response
                        .setMessage(e.getMessage())
                        .setCode(500);
            }
        }
        System.out.println(response);
        return response;
    }
}
