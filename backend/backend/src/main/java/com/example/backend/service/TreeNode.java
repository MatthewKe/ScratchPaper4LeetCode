package com.example.backend.service;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TreeNode {

    static List<TreeNode> treeNodes = new ArrayList<>();
    static int idCounter = 0;
    int id;

    int flag;
    public int val;
    public TreeNode left;
    public TreeNode right;

    TreeNode() {
        generateTreeNode(this);
    }

    public TreeNode(int val) {
        this.val = val;
        generateTreeNode(this);
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
        generateTreeNode(this);
    }

    public static void generateTreeNode(TreeNode treeNode) {
        treeNode.id = idCounter++;
        treeNodes.add(treeNode);
        generateTreeDatas(treeNode);
    }

    public void setLeft(TreeNode left) {
        this.left = left;
        generateTreeDatas(this);
    }

    public void setRight(TreeNode right) {
        this.right = right;
        generateTreeDatas(this);
    }

    private static void generateTreeDatas(TreeNode latestNode) {
        treeNodes
                .stream()
                .filter(treeNode -> treeNode != latestNode)
                .forEach(treeNode -> treeNode.flag = 0);
        latestNode.flag = 1;
        List<TreeData> treeDatas = new ArrayList<>();
        boolean[] isRoot = new boolean[treeNodes.size()];
        Arrays.fill(isRoot, true);
        for (int i = 0; i < treeNodes.size(); i++) {
            TreeNode treeNode = treeNodes.get(i);
            if (treeNode.left != null) {
                for (int j = 0; j < treeNodes.size(); j++) {
                    if (treeNode.left == treeNodes.get(j)) {
                        isRoot[j] = false;
                    }
                }
            }
            if (treeNode.right != null) {
                for (int j = 0; j < treeNodes.size(); j++) {
                    if (treeNode.right == treeNodes.get(j)) {
                        isRoot[j] = false;
                    }
                }
            }
        }
        for (int i = 0; i < isRoot.length; i++) {
            if (isRoot[i]) {
                TreeData treeData = generateTreeData(treeNodes.get(i));
                treeDatas.add(treeData);
            }
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        String json = null;
        try {
            json = objectMapper.writeValueAsString(treeDatas);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        String filePath = "src/main/java/com/example/backend/service/treeDatas.json";
        try (FileWriter file = new FileWriter(filePath)) {
            file.write(json);
            file.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    private static TreeData generateTreeData(TreeNode treeNode) {
        if (treeNode == null) {
            return null;
        }
        TreeData treeData = new TreeData();
        treeData.setValue(String.valueOf(treeNode.val));
        treeData.setId(treeNode.id);
        treeData.setFlag(treeNode.flag);
        TreeData leftChild = generateTreeData(treeNode.left);
        TreeData rightChild = generateTreeData(treeNode.right);
        List<TreeData> children = new ArrayList<>();
        TreeData stubTreeNode = new TreeData();
        stubTreeNode.setFlag(0);
        stubTreeNode.setId(-1);
        stubTreeNode.setValue("stub");
        stubTreeNode.setStub(1);
        children.add(leftChild != null ? leftChild : stubTreeNode);
        children.add(rightChild != null ? rightChild : stubTreeNode);
        treeData.setChildren(children);
        return treeData;
    }

    public static void main(String[] args) {
        TreeNode treeNode = new TreeNode();
        treeNode.setRight(new TreeNode());
    }
}