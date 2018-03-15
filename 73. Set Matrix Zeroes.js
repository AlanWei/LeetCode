/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  const map = {
    row: [],
    col: [],
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (map.row.indexOf(i) === -1) {
          map.row.push(i);
        }
        if (map.col.indexOf(j) === -1) {
          map.col.push(j);
        }
      }
    }
  }
  // replace rows
  for (let i = 0; i < map.row.length; i++) {
    matrix[map.row[i]] = new Array(matrix[map.row[i]].length).fill(0);
  }
  // replace cols
  for (let i = 0; i < map.col.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][map.col[i]] = 0;
    }
  }
};