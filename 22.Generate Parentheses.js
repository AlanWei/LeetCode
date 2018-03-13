/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ro = [];
  backTrace("", 0, 0, n, ro);
  return ro;
};

function backTrace(str, open, close, max, ro) {
  if (str.length === max * 2) {
    ro.push(str);
  }
  if (open < max) {
    backTrace(`${str}(`, open + 1, close, max, ro);
  }
  if (open > close) {
    backTrace(`${str})`, open, close + 1, max, ro);
  }
}