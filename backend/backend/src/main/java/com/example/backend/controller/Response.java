package com.example.backend.controller;

public class Response {
    private String message;

    private DebugInfo debugInfo;
    private int code;

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

    public DebugInfo getDebugInfo() {
        return debugInfo;
    }

    public void setDebugInfo(DebugInfo debugInfo) {
        this.debugInfo = debugInfo;
    }

    @Override
    public String toString() {
        return "Response{" +
                "message='" + message + '\'' +
                ", debugInfo=" + debugInfo +
                ", code=" + code +
                '}';
    }
}
