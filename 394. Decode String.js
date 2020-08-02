/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  var result = "";
  var stack = [];
  var curNum = 0;
  for (var i = 0; i < s.length; i++) {
    var cur = s.charAt(i);
    if (cur === "[") {
      stack.push(result);
      stack.push(curNum);
      result = "";
      curNum = 0;
    } else if (cur === "]") {
      var num = stack.pop();
      var prevStr = stack.pop();
      result = prevStr + result.repeat(num);
    } else if (Number.isInteger(parseInt(cur, 10))) {
      curNum = curNum * 10 + parseInt(cur, 10);
    } else {
      result += cur;
    }
  }
  return result;
};

var decodeString = function (s) {
  var res = "";
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var cur = s.charAt(i);
    if (cur !== "]") {
      stack.push(cur);
    } else {
      var curItem = stack.pop();
      var curStr = "";
      var numBit = 0;
      var curNum = 0;
      while (curItem !== "[") {
        curStr = curItem + curStr;
        curItem = stack.pop();
      }
      curItem = stack.pop();
      while (Number.isInteger(parseInt(curItem, 10))) {
        curNum = parseInt(curItem, 10) * Math.pow(10, numBit) + curNum;
        numBit++;
        curItem = stack.pop();
      }
      if (curItem !== undefined) {
        stack.push(curItem);
      }
      stack.push(curStr.repeat(curNum));
    }
  }
  for (let i = 0; i < stack.length; i++) {
    res += stack[i];
  }
  return res;
};
