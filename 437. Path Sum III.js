/**
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  var count = 0;
  var prefixSum = {};
  var helper = function(node, curSum) {
    if (!node) {
      return;
    }
    curSum += node.val;
    if (curSum === sum) {
      count++;
    }

    if (prefixSum[curSum - sum]) {
      count += prefixSum[curSum - sum];
    }

    if (prefixSum[curSum]) {
      prefixSum[curSum] += 1;
    } else {
      prefixSum[curSum] = 1;
    }

    helper(node.left, curSum);
    helper(node.right, curSum);

    // single node cannot be a path
    prefixSum[curSum] -= 1;
  }

  helper(root, 0);

  return count;
};
