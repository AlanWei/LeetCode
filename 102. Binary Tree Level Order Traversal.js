/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * [
 * [3],
 * [9,20],
 * [15,7],
 * ]
 */

/**
 * Hints:
 * Maintain count for current level nodes
 * Push valid next level nodes to a queue and count
 * When current level count = 0, move to the next level
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

var levelOrder = function(root) {
  const ro = [];
  
  if (root === null){
    return ro;
  }

  const queue = [];
  let temp = [];
  let currentLevelCount = 1;
  let nextLevelCount = 0;

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
      ro.push(temp);
      temp = [];
      currentLevelCount = nextLevelCount;
      nextLevelCount = 0;
    }
  }
  
  return ro;
};