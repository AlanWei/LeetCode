/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  var mL = matrix.length;
  if (mL === 0) {
    return false;
  }
  var nL = matrix[0].length;

  var helper = function (target, m, n) {
    if (m === mL || n === -1) {
      return false;
    }

    var cur = matrix[m][n];

    if (cur === target) {
      return true;
    }

    if (cur > target) {
      n -= 1;
    }

    if (cur < target) {
      m += 1;
    }

    return helper(target, m, n);
  };

  return helper(target, 0, nL - 1);
};

console.log(searchMatrix([[1, 3, 5]], 5));
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7, 9],
      [2, 4, 6, 8, 10],
      [11, 13, 15, 17, 19],
      [12, 14, 16, 18, 20],
      [21, 22, 23, 24, 25],
    ],
    11
  )
);
console.log(searchMatrix([[]], 1));
console.log(searchMatrix([[-5]], -10));
console.log(searchMatrix([[1, 1]], 0));
