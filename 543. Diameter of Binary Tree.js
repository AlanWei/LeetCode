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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  var maxNodeCount = 1;
  var helper = function (node) {
    if (node === null) {
      return 0;
    }
    var ll = helper(node.left);
    var rr = helper(node.right);
    maxNodeCount = Math.max(maxNodeCount, ll + rr + 1);
    return Math.max(ll, rr) + 1;
  };
  helper(root);
  return maxNodeCount - 1;
};
