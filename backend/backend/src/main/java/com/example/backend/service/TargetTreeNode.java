package com.example.backend.service;

public class TargetTreeNode {
    int id;
    String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "targetTreeNode{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
