package com.example.backend.service;

import com.example.backend.controller.Code;
import com.sun.jdi.Bootstrap;
import com.sun.jdi.VirtualMachine;
import com.sun.jdi.connect.Connector;
import com.sun.jdi.connect.IllegalConnectorArgumentsException;
import com.sun.jdi.connect.LaunchingConnector;
import com.sun.jdi.connect.VMStartException;
import com.sun.jdi.event.Event;
import com.sun.jdi.event.EventSet;
import com.sun.jdi.request.ClassPrepareRequest;

import java.io.*;
import java.util.Map;

public class DynamicDebugger {
    Process jdbProcess;
    private int[] breakPointLines;

    private Thread thread;

    public int[] getBreakPointLines() {
        return breakPointLines;
    }

    public void setBreakPointLines(int[] breakPointLines) {
        this.breakPointLines = breakPointLines;
    }

    private static DynamicDebugger dynamicDebugger;

    private DynamicDebugger(){

    }

    public static DynamicDebugger getDynamicDebugger(){
        if(dynamicDebugger==null){
            dynamicDebugger = new DynamicDebugger();
        }
        return dynamicDebugger;
    }

    public void debug(Code code) throws IOException, InterruptedException, CompileException, IllegalConnectorArgumentsException, VMStartException {
        ClassGenerator.generate(code.getContext());
        breakPointLines=code.getBreakPoints();

        jdbProcess = Runtime.getRuntime().exec("jdb -classpath src/main/java sourcecode.Main");
        // 准备用于发送命令的 Writer
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(jdbProcess.getOutputStream(),"GBK");

        // 向 jdb 发送命令
        outputStreamWriter.write("help\n"); // 示例命令
        outputStreamWriter.flush();

        // 准备读取 jdb 的输出
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(jdbProcess.getInputStream(),"GBK"));

        // 读取输出
        String line;
        while ((line = bufferedReader.readLine()) != null) {
            System.out.println(line);
        }

        // 关闭资源
        outputStreamWriter.close();
        bufferedReader.close();
        jdbProcess.waitFor();
    }

}
