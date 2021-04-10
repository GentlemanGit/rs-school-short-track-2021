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
  const DNS = {};
  for (let i = 0; i < domains.length; i++) {
    const arrDomains = domains[i].split('.').reverse();
    for (let j = 0; j < arrDomains.length; j++) {
      if (arrDomains[j - 1]) {
        arrDomains[j] = `${arrDomains[j - 1]}.${arrDomains[j]}`;
      } else {
        arrDomains[j] = `.${arrDomains[j]}`;
      }
    }
    for (let j = 0; j < arrDomains.length; j++) {
      if (DNS[arrDomains[j]]) {
        DNS[arrDomains[j]] += 1;
      } else {
        DNS[arrDomains[j]] = 1;
      }
    }
  }
  return DNS;
}

module.exports = getDNSStats;
