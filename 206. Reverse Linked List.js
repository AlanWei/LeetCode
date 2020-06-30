/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null;
  while (head !== null) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

var reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  var next = head.next;
  var prev = reverseList(head.next);
  next.next = head;
  head.next = null;

  return prev;
};