/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const arrs = traceListNode(head, []);
  const len = arrs.length;
  const first = arrs.slice(0, len - n);
  const second = arrs.slice(len - n + 1);

  return first.concat(second);
};

function traceListNode(node, arr) {
  arr.push(node.val);
  if (node.next === null) {
    return arr;
  }
  return traceListNode(node.next, arr);
}