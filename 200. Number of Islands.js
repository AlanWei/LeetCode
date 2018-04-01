/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const height = grid.length;
  if (height < 1) {
    return 0;
  }
  const width = grid[0].length;
  const helper = (i, j) => {
    if (i < 0 || i === height || j < 0 || j === width || grid[i][j] === '0') {
      return 0;
    }
    grid[i][j] = '0';
    helper(i - 1, j);
    helper(i + 1, j);
    helper(i, j - 1);
    helper(i, j + 1);
    return 1;
  }

  let count = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        count += helper(i, j);
      }
    }
  }
  return count;
};

console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]));