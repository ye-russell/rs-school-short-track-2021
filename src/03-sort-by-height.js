/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arrRaw) {
  let arr = arrRaw;
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
    }
  }
  for (let i = 0; i < arrRaw.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i--;
    }
  }
  function sorter(a, b) {
    return a - b;
  }
  arr = arr.sort(sorter);
  for (let i = 0; i < indexes.length; i++) {
    arr.splice(indexes[i], 0, -1);
  }
  return arr;
}

module.exports = sortByHeight;
