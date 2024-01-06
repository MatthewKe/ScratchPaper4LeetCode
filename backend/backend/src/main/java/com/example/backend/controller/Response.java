package com.example.backend.controller;

public class Response {
    private String message;
    private int code;

    // 标准的 getters 和 setters
    public String getMessage() {
        return message;
    }

    public Response setMessage(String message) {
        this.message = message;
        return this;
    }

    public int getCode() {
        return code;
    }

    public Response setCode(int code) {
        this.code = code;
        return this;
    }
}
