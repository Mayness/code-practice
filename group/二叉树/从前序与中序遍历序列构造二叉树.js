// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder || preorder.length < 1) {
      return null;
  }
  const root = preorder[ 0 ];
  const rootTree = new TreeNode(root);
  if(preorder.length === 1) {
      return rootTree;
  }
  const index = inorder.indexOf(root);
  const inorderLeft = inorder.slice(0, index);
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  const inorderRight = inorder.slice(index + 1, inorder.length);
  const preorderRight = preorder.slice(preorderLeft.length + 1, preorder.length);
  rootTree.left = buildTree(preorderLeft, inorderLeft);
  rootTree.right = buildTree(preorderRight, inorderRight);
  return rootTree;
};

/*
  例如：
            1
        2       3
      4    5   6    7
    8   9
前：1 2 4 8 9 5 3 6 7
中：8 4 9 2 5 1 6 3 7
  从前序第一位选中中位数1
  中序左边 inorderLeft = [8,4,9,2,5]
  中序右边 preorderLeft = [6,3,7]
  前序左边 preorderLeft = [2,4,8,9,5]  肯定和中序左边长度一致，因为都是属于左子树一边的。右子树同理
  前序右边 preorderRight = [3,6,7]    右子树直接取前序左边的剩余部分即可
*/
