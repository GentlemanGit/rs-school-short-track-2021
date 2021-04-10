// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.newQueue = this.queue;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.newQueue.value = element;
    this.newQueue.next = new ListNode();
    this.newQueue = this.newQueue.next;
    this.length++;
  }

  dequeue() {
    const element = this.queue.value;
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return element;
  }
}

module.exports = Queue;
