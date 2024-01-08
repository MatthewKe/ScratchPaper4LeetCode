package com.example.backend.controller;

import com.example.backend.service.TreeData;

import java.util.List;

public class Response {
    private String message;

    private List<TreeData> treeDatas;
    private DebugInfo debugInfo;
    private int code;

    public List<TreeData> getTreeDatas() {
        return treeDatas;
    }

    public void setTreeDatas(List<TreeData> treeDatas) {
        this.treeDatas = treeDatas;
    }

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
