/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
 */
function encodeLine(/* str */) {
  throw new Error('Not implemented');
  // let finalStr = '';
  // let counter = 0;
  // for (let i = 0; i < str.length; i++) {
  //   counter = 0;
  //   for (let j = 0; j < str.length; j++) {
  //     if (str[i] === str[j]) {
  //       counter++;
  //       str.split('').splice(j, 1).join('');
  //     } else {
  //       finalStr += `${counter}${str[i]}`;
  //       i = j;
  //       break;
  //     }
  //   }
  // }
  // return finalStr;
}

module.exports = encodeLine;
