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
  let newN = String(n).split('');
  let minN = newN[0];
  for (let i = 1; i < newN.length; i++) {
    minN = minN < newN[i] ? minN : newN[i];
  }
  newN = String(n).replace(minN, '');
  return +newN;
}
module.exports = deleteDigit;
