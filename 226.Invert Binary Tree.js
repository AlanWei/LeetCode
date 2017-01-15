/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root !== null) {
    root = revert(root);
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
  }

  return root;
};

function revert(node) {
  var temp = node.right;
  node.right = node.left;
  node.left = temp;

  return node;
}