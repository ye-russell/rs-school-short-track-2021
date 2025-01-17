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
function encodeLine(str) {
  let finalStr = '';
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    counter = 0;
    let lastindex = i;
    if (str[i] !== str[i + 1]) {
      finalStr += `${str[i]}`;
    }
    if (str[i] === str[i + 1]) {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          counter++;
          lastindex = j;
        }
      }
      finalStr += `${counter}${str[i]}`;
      i = lastindex;
    }
  }
  return finalStr;
}

module.exports = encodeLine;
