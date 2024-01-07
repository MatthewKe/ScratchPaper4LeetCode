package com.example.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class DebugInfo {
    int currentLine;
    List<Map<String, String>> variables = new ArrayList<>();

    public int getCurrentLine() {
        return currentLine;
    }

    public void setCurrentLine(int currentLine) {
        this.currentLine = currentLine;
    }

    public List<Map<String, String>> getVariables() {
        return variables;
    }

    public void setVariables(List<Map<String, String>> variables) {
        this.variables = variables;
    }

    public void addVariable(Map<String, String> variable) {
        variables.add(variable);
    }

    @Override
    public String toString() {
        return "DebugInfo{" +
                "currentLine=" + currentLine +
                ", variables=" + variables +
                '}';
    }
}
