// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

var maxDepth = function(root) {
  // 通过递归遍历左右的当前层数，由下至上计数。（其实就是root.left和root.right的层数进行比较）
  return root === null ? 0 : 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};