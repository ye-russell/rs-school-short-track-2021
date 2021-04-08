/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let flexStr = s2;
  let counter = 0;
  let memory = '';
  for (let i = 0; i < s1.length; i++) {
    memory = '';
    for (let j = 0; j < flexStr.length; j++) {
      if (memory.includes(flexStr[j]) === false && s1[i] === flexStr[j]) {
        counter++;
        memory += flexStr[j];
        flexStr = flexStr.replace(flexStr[j], '');
        break;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
