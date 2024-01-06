package com.example.backend.service;
import java.io.*;

public class DynamicExecutor {
    public static String execute (String sourceCode) throws IOException, CompileException, InterruptedException {
        ClassGenerator.generate(sourceCode);
        Process runProcess = Runtime.getRuntime().exec("java -classpath src/main/java sourcecode.Main");
        BufferedReader outputReader = new BufferedReader(new InputStreamReader(runProcess.getInputStream(),"GBK"));
        String line;
        StringBuilder output= new StringBuilder();
        while ((line = outputReader.readLine()) != null) {
            System.out.println(line);
            output.append(line);
        }
        BufferedReader errorReader = new BufferedReader(new InputStreamReader(runProcess.getErrorStream(),"GBK"));
        String errorLine;
        while ((errorLine = errorReader.readLine()) != null) {
            System.out.println(errorLine);
        }

        return output.toString();
    }
}
