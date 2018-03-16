/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function traveral(node, ro) {
  if (node === null) {
    return;
  }
  traveral(node.left, ro);
  ro.push(node.val);
  traveral(node.right, ro);
}

var inorderTraversal = function(root) {
  const ro = [];
  traveral(root, ro);
  return ro;
};