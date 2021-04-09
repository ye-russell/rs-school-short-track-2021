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

function removeKFromList(/* l, k */) {
  throw new Error('Not implemented');
  // let list = l;
  // let add = list.next;
  // let counter = 1;
  // console.log(add);

  // do {
  //   add = add.next;
  //   counter++;
  // } while (add !== null);

  // console.log(counter);
  // add = list.next;
  // let newCounter = 1;

  // do {
  //   if (list.value === k) list = list.next;
  //   else {
  //     if (add === k) list.next = add.next;

  //   }
  //   newCounter++;
  // } while (newCounter !== counter);

  // return list;
}

module.exports = removeKFromList;
