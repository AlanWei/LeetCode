/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1];
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length > 0) {
        res = Math.max(res, i - stack[stack.length - 1]);
      } else {
        stack.push(i);
      }
    }
  }

  return res;
};

console.log(longestValidParentheses(''));
console.log(longestValidParentheses('()'));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses("(()()"));