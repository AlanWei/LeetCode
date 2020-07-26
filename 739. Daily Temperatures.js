/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  var res = [];
  for (var i = 0; i < T.length; i++) {
    for (var j = i; j < T.length; j++) {
      if (T[j] > T[i]) {
        res.push(j - i);
        break;
      }
    }
    if (res.length === i) {
      res.push(0);
    }
  }

  return res;
};

var dailyTemperatures = function (T) {
  var stack = [
    {
      val: T[0],
      ind: 0,
    },
  ];

  var res = new Array(T.length).fill(0);

  for (var i = 1; i < T.length; i++) {
    while (stack.length > 0 && T[i] > stack[stack.length - 1].val) {
      var date = stack.pop();
      res[date.ind] = i - date.ind;
    }
    stack.push({
      val: T[i],
      ind: i,
    });
  }

  return res;
};
