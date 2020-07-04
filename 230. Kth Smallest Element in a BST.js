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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var ro = [];
  var helper = function(root) {
    if (root === null) {
      return;
    }
    helper(root.left);
    ro.push(root);
    helper(root.right);
  }

  helper(root);

  return ro[k];
};