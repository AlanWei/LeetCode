/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (tokens.length > 0) {
    const nums = [];
    for (let i = 0; i < tokens.length; i++) {
      if (!isNaN(tokens[i])) {
        nums.push(parseInt(tokens[i]));
      } else {
        const second = nums.pop();
        const first = nums.pop();
        let result;
        switch (tokens[i]) {
          case '+':
            result = first + second;
            break;
          case '-':
            result = first - second;
            break;
          case '*':
            result = first * second;
            break;
          case '/':
            result = first / second;
            result = result < 0 ? Math.ceil(result) : Math.floor(result);
            break;
        }
        nums.push(result);
      }
    }
    return nums[0];
  }

  return tokens;
};

console.log(evalRPN(["-3","9","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));