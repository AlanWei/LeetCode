/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 === null && t2 === null) {
    return null;
  }
  if (t1 === null) {
    return new TreeNode(t2.val, t2.left, t2.right);
  }
  if (t2 === null) {
    return new TreeNode(t1.val, t1.left, t1.right);
  }

  return new TreeNode(t1.val + t2.val, mergeTrees(t1.left, t2.left), mergeTrees(t1.right, t2.right));;
};