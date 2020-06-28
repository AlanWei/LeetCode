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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }
  if (root.left === null && root.right === null) {
    return [`${root.val}`];
  }
  var left = binaryTreePaths(root.left);
  var right = binaryTreePaths(root.right);
  var all = left.concat(right);
  var result = [];
  for (var i = 0; i < all.length; i++) {
    result.push(`${root.val}->${all[i]}`);
  }

  return result;
};
