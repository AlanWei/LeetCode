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
var isSymmetric = function (root) {
  var queue = [];
  queue.push(root);
  while (queue.length > 0) {
    for (var i = 0; i < queue.length / 2; i++) {
      if (queue[i] === null && queue[queue.length - 1 - i] === null) {
        continue;
      }
      if (queue[i] === null || queue[queue.length - 1 - i] === null) {
        return false;
      }
      if (queue[i].val !== queue[queue.length - 1 - i].val) {
        return false;
      }
    }
    var next = [];
    for (let i = 0; i < queue.length; i++) {
      var cur = queue[i];
      if (cur !== null) {
        next.push(cur.left);
        next.push(cur.right);
      }
    }
    queue = next;
  }

  return true;
};
