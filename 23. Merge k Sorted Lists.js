/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeTwo(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let temp = new ListNode(-1);
  let res = temp;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      res.next = list1;
      list1 = list1.next;
    } else {
      res.next = list2;
      list2 = list2.next;
    }
      res = res.next;
  }

  if (list1) {
    res.next = list1;
  }
  if (list2) {
    res.next = list2;
  }

  return temp.next;
}

var mergeKLists = function(lists) {
  let result = lists[0] || null;
  for (let i = 1; i < lists.length; i++) {
      result = mergeTwo(result, lists[i]);
  }
  return result;
};