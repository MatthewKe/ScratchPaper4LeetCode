package com.example.backend.controller;

public class Code {
    private String context;

    private int[] breakpointsLines;

    public String getContext() {
        return context;
    }

    public Code setContext(String context) {
        this.context = context;
        return this;
    }

    public int[] getBreakpointsLines() {
        return breakpointsLines;
    }

    public Code setBreakpointsLines(int[] breakpointsLines) {
        this.breakpointsLines = breakpointsLines;
        return this;
    }
}
