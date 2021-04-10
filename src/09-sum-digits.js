/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const numberLength = String(n).split('').length;
  console.log(numberLength);
  let number = n;
  for (let i = 0; i < numberLength; i++) {
    if (number < 9) return number;
    number = String(number).split('').reduce((a, b) => Number(a) + Number(b), 0);
    console.log(number);
  }
  return number;
}

module.exports = getSumOfDigits;
