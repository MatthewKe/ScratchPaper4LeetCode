package com.example.backend.controller;

import com.example.backend.service.TargetTreeNode;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class DebugInfo {
    String message;
    int currentLine;
    List<Map<String, String>> variables = new ArrayList<>();

    List<TargetTreeNode> targetTreeNodes = new ArrayList<>();


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


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<TargetTreeNode> getTargetTreeNodes() {
        return targetTreeNodes;
    }

    public void setTargetTreeNodes(List<TargetTreeNode> targetTreeNodes) {
        this.targetTreeNodes = targetTreeNodes;
    }

    public void addTargetTreeNode(TargetTreeNode targetTreeNode) {
        targetTreeNodes.add(targetTreeNode);
    }

    @Override
    public String toString() {
        return "DebugInfo{" +
                "message='" + message + '\'' +
                ", currentLine=" + currentLine +
                ", variables=" + variables +
                ", targetTreeNodes=" + targetTreeNodes +
                '}';
    }
}
