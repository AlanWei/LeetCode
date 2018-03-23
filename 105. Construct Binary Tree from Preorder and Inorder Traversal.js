/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * For example, given
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Return the following binary tree:
    3
   / \
  9  20
    /  \
   15   7
 */

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
  return generate(0, 0, inorder.length - 1, preorder, inorder);
};


var generate = function(pl, il, ir, preorder, inorder) {
  if (il > ir) {
    return null;
  }
  
  const root = new TreeNode(preorder[pl]);
  let midIndex = -1;
  for (let i = il; i <= ir; i++) {
    if (inorder[i] === root.val) {
      midIndex = i;
      break;
    }
  }
  if (midIndex === -1) {
    return null;
  }
  
  root.left = generate(pl + 1, il, midIndex - 1, preorder, inorder);
  root.right = generate(pl + (midIndex - il) + 1, midIndex + 1, ir, preorder, inorder);
  
  return root;
}