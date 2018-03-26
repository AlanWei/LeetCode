/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function loop(head, vals) {
  if (head !== null) {
    vals.push(head.val);
    loop(head.next, vals);
  }
  return vals;
}
function form(head, vals) {
  if (vals.length > 0) {
    const node = new ListNode(vals.shift());
    head.next = node;
    form(head.next, vals);
  }
  return head;
}
var sortList = function(head) {
  let vals = loop(head, []);
  vals = vals.sort((a, b) => a - b);
  const newHead = form(new ListNode(0), vals);
  return newHead.next;
};