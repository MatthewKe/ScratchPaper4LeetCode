package com.example.backend.controller;

import com.example.backend.service.CompileException;
import com.example.backend.service.DynamicDebugger;
import com.example.backend.service.DynamicExecutor;
import com.example.backend.service.TreeData;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

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

    private List<TreeData> readTreeDatas() {
        StringBuilder stringBuilder = new StringBuilder();
        String filePath = "src/main/java/com/example/backend/service/treeDatas.json";
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        ObjectMapper mapper = new ObjectMapper();
        List<TreeData> treeDatas = null;
        try {
            treeDatas = mapper.readValue(stringBuilder.toString(), new TypeReference<List<TreeData>>() {
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return treeDatas;
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
        response.setTreeDatas(readTreeDatas());
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
