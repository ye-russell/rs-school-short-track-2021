/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringed = String(n);
  let maxNumber = 0;
  for (let i = 0; i < stringed.length; i++) {
    const removedChar = stringed.replace(stringed[i], '');
    const numbered = Number(removedChar);
    if (numbered > maxNumber) maxNumber = numbered;
  }
  return maxNumber;
}

module.exports = deleteDigit;
