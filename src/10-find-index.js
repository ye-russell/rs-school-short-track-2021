/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(/* array, value */) {
  throw new Error('Not implemented');
  // left = 0;
  // right = array.length;
  // if (left > right) return -1;
  // const mid = (left + right) / 2;
  // if (array[mid] === value) return mid;
  // if (array[mid] > value) {
  //   right = mid - 1;
  //   return findIndex(array, value);
  // }
  // return findIndex(array, value, mid + 1, right);
}

module.exports = findIndex;
