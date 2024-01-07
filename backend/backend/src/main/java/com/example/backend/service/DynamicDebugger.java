package com.example.backend.service;

import com.example.backend.controller.Code;
import com.example.backend.controller.DebugInfo;


import java.io.*;
import java.util.Collections;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DynamicDebugger {
    Process jdbProcess;
    OutputStreamWriter outputStreamWriter;
    BufferedReader bufferedReader;
    private int[] breakPointLines;


    public int[] getBreakPointLines() {
        return breakPointLines;
    }

    public void setBreakPointLines(int[] breakPointLines) {
        this.breakPointLines = breakPointLines;
    }

    private static DynamicDebugger dynamicDebugger;

    private DynamicDebugger() {

    }

    public static DynamicDebugger getDynamicDebugger() {
        if (dynamicDebugger == null) {
            dynamicDebugger = new DynamicDebugger();
        }
        return dynamicDebugger;
    }

    public DebugInfo debug(Code code) throws IOException, InterruptedException, CompileException {
        ClassGenerator.generate(code.getContext());
        breakPointLines = code.getBreakpointsLines();
        if (jdbProcess != null) {
            jdbProcess.destroyForcibly();
            outputStreamWriter.close();
            bufferedReader.close();
        }
        jdbProcess = Runtime.getRuntime().exec("jdb -classpath src/main/java sourcecode.Main");
        outputStreamWriter = new OutputStreamWriter(jdbProcess.getOutputStream(), "GBK");
        bufferedReader = new BufferedReader(new InputStreamReader(jdbProcess.getInputStream(), "GBK"));
        //正在初始化jdb...
        jdbReader();
        //写入断点
        for (int i : breakPointLines) {
            i++;
            jdbWriter("stop at sourcecode.Solution:" + i);
            jdbReader();
        }
        //run
        jdbWriter("run");
        // 运行sourcecode.Main
        //设置未捕获的java.lang.Throwable
        //设置延迟的未捕获的java.lang.Throwable
        jdbReader();
        //VM 已启动: 设置延迟的断点sourcecode.Solution:19
        //设置延迟的断点sourcecode.Solution:16
        //
        //断点命中: "线程=main", sourcecode.Solution.construct(), 行=16 bci=0
        //16            if (left > right) {
        String output = jdbReader();
        int currentLine = extractLineNum(output);
        DebugInfo debugInfo = new DebugInfo();
        debugInfo.setCurrentLine(currentLine);
        extractVariables(debugInfo);
        return debugInfo;
    }

    private void extractVariables(DebugInfo debugInfo) throws IOException {
        jdbWriter("locals");
        String output = jdbReader();
        String[] outputLines = output.split("\r");
        for (String str : outputLines) {
            Pattern pattern = Pattern.compile("(\\w+)\\ =\\ (.+)");
            Matcher matcher = pattern.matcher(str);
            if (!matcher.find()) {
                continue;
            }

            String key = matcher.group(1);
            String value = matcher.group(2);
            debugInfo.addVariable(Collections.singletonMap(key, value));
            if (value.contains("TreeNode")) {
                jdbWriter("dump " + key);
                // node = {
                //    idCounter: 1
                //    id: 0
                //    val: 3
                //    left: null
                //    right: null
                //}
                output = jdbReader();
                pattern = Pattern.compile("idCounter:\\ (\\d+)");
                matcher = pattern.matcher(output);
                if (matcher.find()) {
                    int id = Integer.parseInt(matcher.group(1));
                    debugInfo.addTreeNodes(Collections.singletonMap(key, id));
                }
            }
        }
    }

    private int extractLineNum(String str) {
        Pattern pattern = Pattern.compile("行=(\\d+)");
        Matcher matcher = pattern.matcher(str);
        String lineNumber = null;
        if (matcher.find()) {
            lineNumber = matcher.group(1);
            System.out.println("提取的行号: " + lineNumber);
        } else {
            System.out.println("没有找到匹配的行号");
        }
        return Integer.parseInt(lineNumber);
    }

    private void jdbWriter(String str) throws IOException {
        outputStreamWriter.write(str + "\n");
        outputStreamWriter.flush();
    }


    private String jdbReader() throws IOException {
        System.out.println("-----");
        StringBuilder lineBuilder = new StringBuilder();
        StringBuilder outputBuilder = new StringBuilder();
        int intChar;
        while ((intChar = bufferedReader.read()) != -1) {
            char character = (char) intChar;
            if (character == '\n') {
                outputBuilder.append(lineBuilder.toString());
                System.out.println(lineBuilder);
                lineBuilder = new StringBuilder();
            } else if (character == '>' && lineBuilder.isEmpty()) {
                break;
            } else if (character == ']' && lineBuilder.toString().equals("main[1")) {
                break;
            } else {
                lineBuilder.append(character);
            }
        }
        System.out.println(outputBuilder.length());
        return outputBuilder.toString();
    }
}


