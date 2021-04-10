/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = [];
  let k = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      k += 1;
    } else if (str[i] !== str[i + 1]) {
      if (k !== 1) {
        newStr.push(k);
      }
      newStr.push(str[i]);
      k = 1;
    }
  }
  return newStr.join('');
}
module.exports = encodeLine;
