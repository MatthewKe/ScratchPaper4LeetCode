package com.example.backend.service;

import java.util.List;

public class TreeData {
    String value;
    int id;
    int flag;
    List<TreeData> children;

    int stub = 0;

    public int getStub() {
        return stub;
    }

    public void setStub(int stub) {
        this.stub = stub;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public List<TreeData> getChildren() {
        return children;
    }

    public void setChildren(List<TreeData> children) {
        this.children = children;
    }
}
