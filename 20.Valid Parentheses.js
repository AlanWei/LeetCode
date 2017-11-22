/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = s.split('');
  const match = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const open = [];
  const close = [];

  brackets.forEach((bracket) => {
    if (openBrackets.indexOf(bracket) !== -1) {
      open.unshift(bracket);
    } else if (closeBrackets.indexOf(bracket) !== -1) {
      const firstOpen = open[0];
      if (match[firstOpen] === bracket) {
        open.shift();
      } else {
        close.push(bracket);
      }
    }
  });

  return open.length === 0 && close.length === 0;
};
