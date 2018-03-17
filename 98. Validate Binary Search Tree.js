/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValid(node, min, max) {
  if (node === null) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);
}
var isValidBST = function(root) {
  return isValid(root, -Infinity, Infinity);
};