package com.example.backend.service;
import java.io.*;

public class DynamicExecutor {

    public static String execute (String sourceCode) throws IOException, CompileException, InterruptedException {

        // 步骤 1: 创建 .java 文件
        String fileName = "Main.java";
        BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));
        writer.write(sourceCode);
        writer.close();

        // 步骤 2: 编译 .java 文件
        Process compileProcess = Runtime.getRuntime().exec("javac " + fileName);
        compileProcess.waitFor();

        // 检查编译错误
        if (compileProcess.exitValue() != 0) {
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(compileProcess.getErrorStream(), "GBK"));
            String line;
            StringBuilder errorInfo= new StringBuilder();
            while ((line = errorReader.readLine()) != null) {
                System.err.println(line);
                errorInfo.append(line);
            }
            errorReader.close();
            throw new CompileException(errorInfo.toString());
        }

        // 步骤 3: 运行编译后的类
        Process runProcess = Runtime.getRuntime().exec("java Temp");
        BufferedReader outputReader = new BufferedReader(new InputStreamReader(runProcess.getInputStream()));
        String line;
        StringBuilder output= new StringBuilder();
        while ((line = outputReader.readLine()) != null) {
            System.out.println(line);
            output.append(line);
        }

        // 清理生成的文件
        new File(fileName).delete();
        new File("Main.class").delete();

        return output.toString();
    }
}
