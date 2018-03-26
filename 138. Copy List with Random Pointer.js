/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  const dict = {};
  const missed = [];
  let originNode = head;
  let newNode = new RandomListNode(0);
  const newHead = newNode;
  while (originNode !== null) {
    var temp = new RandomListNode(originNode.label);
    dict[originNode.label] = temp;
    newNode.next = temp;
    newNode = newNode.next;

    if (originNode.random !== null) {
      if (dict[originNode.random.label]) {
        newNode.random = dict[originNode.random.label];
      } else {
        newNode.random = originNode.random.label;
        missed.push(newNode.label);
      }
    }
    originNode = originNode.next;
  }
  for (let i = 0; i < missed.length; i++) {
    const curr = dict[missed[i]];
    curr.random = dict[curr.random];
  }
  return newHead.next;    
};