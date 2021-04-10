/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  const list = new ListNode();
  list.next = l;
  let newlist = list;
  while (newlist.next) {
    if (newlist.next.value === k) {
      newlist.next = newlist.next.next;
    } else {
      newlist = newlist.next;
    }
  }
  return list.next;
}

module.exports = removeKFromList;
