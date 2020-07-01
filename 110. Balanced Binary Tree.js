/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  var traversal = function(root) {
    if (root === null) {
      return 0;
    }
    var left = traversal(root.left);
    var right = traversal(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }

    return Math.max(left, right) + 1;
  }
  return traversal(root) !== -1;
};
