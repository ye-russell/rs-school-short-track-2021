const ListNode = require('../extensions/list-node');
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
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  // get size() {
  // }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const element = this.head.value;
    this.head = this.head.next;
    return element;
  }
}

module.exports = Queue;
