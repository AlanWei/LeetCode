/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length < 1) {
    return 0;
  }
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  var m = obstacleGrid.length + 1;
  var n = obstacleGrid[0].length + 1;
  var matrix = [];
  for (var i = 0; i < m; i++) {
    matrix[i] = new Array(n);
  }

  matrix[0][0] = 0;

  for (var i = 1; i < m; i++) {
    matrix[i][0] = 0;
  }

  for (var i = 1; i < n; i++) {
    matrix[0][i] = 0;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i - 1][j - 1] === 1) {
        matrix[i][j] = 0;
      } else if (i === 1 && j === 1) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j];
      }
    }
  }

  return matrix[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(uniquePathsWithObstacles([[1, 0]]));
console.log(
  uniquePathsWithObstacles([
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
