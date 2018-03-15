/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }
  const matrix = [[1]];
  for (let i = 1; i < n; i++) {
    matrix[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    matrix.push([]);
    matrix[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};

console.log(uniquePaths(23, 12));