/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let head = 0;
    let tail = matrix.length - 1;
    while (head < tail) {
      const temp = matrix[i][head];
      matrix[i][head] = matrix[i][tail];
      matrix[i][tail] = temp;
      head++;
      tail--;
    }
  }
};