/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return matrix;
  }
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  const ro = [];

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      ro.push(matrix[rowBegin][i]);
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      ro.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowEnd >= rowBegin) {
      for (let i = colEnd; i >= colBegin; i--) {
        ro.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }
    if (colEnd >= colBegin) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        ro.push(matrix[i][colBegin]);
      }
      colBegin++;
    }
  }

  return ro;
};