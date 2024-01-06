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
import sourcecode.Main;

import java.io.*;
import java.util.Map;

public class DynamicDebugger {
    private Class debugClass;
    private int[] breakPointLines;

    public Class getDebugClass() {
        return debugClass;
    }

    public void setDebugClass(Class debugClass) {
        this.debugClass = debugClass;
    }

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
        debugClass= Main.class;
        breakPointLines=new int[]{7,9};
        VirtualMachine vm= connectAndLaunchVM();
        enableClassPrepareRequest(vm);
        EventSet eventSet = null;
        while ((eventSet = vm.eventQueue().remove()) != null) {
            for (Event event : eventSet) {
                System.out.println(event);
            }
        }
    }

    public VirtualMachine connectAndLaunchVM() throws IOException, IllegalConnectorArgumentsException, VMStartException {
        LaunchingConnector launchingConnector = Bootstrap.virtualMachineManager().defaultConnector();
        Map<String, Connector.Argument> arguments = launchingConnector.defaultArguments();
        arguments.get("main").setValue(debugClass.getName());
        VirtualMachine vm = launchingConnector.launch(arguments);
        return vm;
    }

    public void enableClassPrepareRequest(VirtualMachine vm) {
        ClassPrepareRequest classPrepareRequest = vm.eventRequestManager().createClassPrepareRequest();
        classPrepareRequest.addClassFilter(debugClass.getName());
        classPrepareRequest.enable();
    }
}
