/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  var max = Math.max(...nums);
  var index = nums.indexOf(max);
  var left = nums.slice(0, index);
  var right = nums.slice(index + 1);
  var root = new TreeNode(
    max,
    constructMaximumBinaryTree(left),
    constructMaximumBinaryTree(right)
  );
  return root;
};
