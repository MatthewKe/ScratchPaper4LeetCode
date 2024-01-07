package com.example.backend.service;

import java.io.*;

public class ClassGenerator {
    public static void generate(String sourceCode) throws IOException, InterruptedException, CompileException {
//        String fileName = "sourceCode/"+"Main.java";
        String fileName = "src/main/java/sourcecode/Main.java";
        BufferedWriter writer = new BufferedWriter(new FileWriter(fileName));
        writer.write("package sourcecode;\n");
        writer.write("import com.example.backend.service.TreeNode;\n");
        writer.write(sourceCode);
        writer.close();
        
        String command = "javac -g src/main/java/sourcecode/*.java src/main/java/com/example/backend/service/TreeNode.java";
        Process compileProcess = Runtime.getRuntime().exec(command);

        compileProcess.waitFor();

        if (compileProcess.exitValue() != 0) {
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(compileProcess.getErrorStream(), "GBK"));
            String line;
            StringBuilder errorInfo = new StringBuilder();
            while ((line = errorReader.readLine()) != null) {
                System.err.println(line);
                errorInfo.append(line);
            }
            errorReader.close();
            throw new CompileException(errorInfo.toString());
        }
    }
}
