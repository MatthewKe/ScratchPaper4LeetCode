package com.example.backend.controller;

public class Code {
    private String context;

    private int[] breakPoints;

    public String getContext() {
        return context;
    }

    public Code setContext(String context) {
        this.context = context;
        return this;
    }

    public int[] getBreakPoints() {
        return breakPoints;
    }

    public Code setBreakPoints(int[] breakPoints) {
        this.breakPoints = breakPoints;
        return this;
    }
}
