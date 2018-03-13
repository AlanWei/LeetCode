/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var result = 0;
  for (var i=0; i<grid.length; i++) {
    for (var j=0; j<grid[i].length; j++) {
      if (grid[i][j] === 1) {
        var adjacents = findAdjacent(i, j);
        (adjacents || []).forEach(a => {
          if (grid[a.x] !== undefined) {
            var point = grid[a.x][a.y];
            if (point === 0 || point === undefined) {
              result++;
            }
          } else {
            result++;
          }
        });
      }
    }
  }

  return result;
};

function findAdjacent(x, y) {
  return [
    {x: x, y: y-1},
    {x: x + 1, y: y},
    {x: x, y: y + 1},
    {x: x - 1, y: y},
  ];
}

console.log(islandPerimeter([[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]));