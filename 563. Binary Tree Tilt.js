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
var findTilt = function(root) {
  var sum = 0;
  var traversal = function(root) {
    if (root === null) {
      return 0;
    }
    var left = traversal(root.left);
    var right = traversal(root.right);
    sum = sum + Math.abs(left - right);
    return left + right + root.val;
  }
  traversal(root);
  return sum;
};
