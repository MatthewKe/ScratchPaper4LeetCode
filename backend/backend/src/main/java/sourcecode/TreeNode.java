package sourcecode;

class TreeNode {
    static int idCounter = 0;
    int id;
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
        id = idCounter++;
    }

    TreeNode(int val) {
        this.val = val;
        id = idCounter++;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}