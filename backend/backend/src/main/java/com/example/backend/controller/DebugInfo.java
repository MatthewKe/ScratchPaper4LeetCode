package com.example.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

public class DebugInfo {
    int currentLine;
    List<Map<String, String>> variables = new ArrayList<>();

    List<Map<String, Integer>> treeNodes = new ArrayList<>();

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

    public List<Map<String, Integer>> getTreeNodes() {
        return treeNodes;
    }

    public void setTreeNodes(List<Map<String, Integer>> treeNodes) {
        this.treeNodes = treeNodes;
    }

    public void addTreeNodes(Map<String, Integer> treeNode) {
        treeNodes.add(treeNode);
    }

    @Override
    public String toString() {
        return "DebugInfo{" +
                "currentLine=" + currentLine +
                ", variables=" + variables +
                ", treeNodes=" + treeNodes +
                '}';
    }
}
