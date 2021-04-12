/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newDomains = domains;
  const newObj = {};
  let name = '';
  for (let i = 0; i < domains.length; i++) {
    newDomains[i] = newDomains[i].split('.');
  }
  for (let i = 0; i < domains.length; i++) {
    for (let j = domains[i].length - 1; j >= 0; j--) {
      let counter = 0;
      for (let l = 0; l < domains.length; l++) {
        for (let k = domains[l].length - 1; k >= 0; k--) {
          if (domains[i][j] === domains[l][k]) {
            counter++;
          }
        }
      }
      name += `.${domains[i][j]}`;
      newObj[name] = counter;
    }
    name = '';
  }
  return newObj;
}

module.exports = getDNSStats;
