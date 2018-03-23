/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate between).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7]
 * return its zigzag level order traversal as:
 * [
 * [3],
 * [20,9],
 * [15,7],
 * ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const ro = [];
  
  if (root === null){
    return ro;
  }

  const queue = [];
  let temp = [];
  let currentLevelCount = 1;
  let nextLevelCount = 0;
  let fromLeft = true;

  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    temp.push(node.val);
    currentLevelCount--;

    if (node.left) {
      queue.push(node.left);
      nextLevelCount++;
    }
    if (node.right) {
      queue.push(node.right);
      nextLevelCount++;
    }

    if (currentLevelCount === 0) {
      if (fromLeft) {
        ro.push(temp);
      } else {
        ro.push(temp.reverse());
      }
      temp = [];
      currentLevelCount = nextLevelCount;
      nextLevelCount = 0;
      fromLeft = !fromLeft;
    }
  }
  
  return ro;
};