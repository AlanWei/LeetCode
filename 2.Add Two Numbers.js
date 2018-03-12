/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0, []);
};

const add = (l1, l2, carry, ro) => {
  if (l1 !== null || l2 !== null || carry !== 0) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    const addon = parseInt(val / 10);
    const reminder = val % 10;
    ro.push(reminder);
    add(l1 ? l1.next : null, l2 ? l2.next : null, addon, ro);
  }

  return ro;
}