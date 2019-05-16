// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 1) {
    // 这里为了节省性能，就不用再寻找中位数了
    return new TreeNode(nums[0]);
  } else if (nums.length > 1) {
    // 寻找中位数
    const mid = Math.ceil(nums.length / 2);
    const tree = new TreeNode(nums[mid - 1]);
    // 将左右两边的数组再进行递归运算
    tree.left = sortedArrayToBST(nums.slice(0, mid - 1));
    tree.right = sortedArrayToBST(nums.slice(mid, nums.length));
    return tree;
  } else {
    return null;
  }
};