package sourcecode;
import com.example.backend.service.TreeNode;
public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.constructMaximumBinaryTree(new int[]{3,2,1,6,0,5});
        System.out.println("hello world");
    }
}


class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return construct(nums, 0, nums.length - 1);
    }

    public TreeNode construct(int[] nums, int left, int right) {
        if (left > right) {
            return null;
        }
        int best = left;
        for (int i = left + 1; i <= right; ++i) {
            if (nums[i] > nums[best]) {
                best = i;
            }
        }
        TreeNode node = new TreeNode(nums[best]);
        node.setLeft(construct(nums, left, best - 1));
        node.setRight(construct(nums, best + 1, right));
        return node;
    }
}