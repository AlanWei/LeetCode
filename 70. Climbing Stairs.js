var count = 0;

var climbStairs = function(n) {
  if (n <= 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  var oneStepBefore = 2;
  var twoStepBefore = 1;
  var count = 0;

  for (var i=2; i<n; i++) {
    count = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = count;
  }

  return count;
};

console.log(climbStairs(35));