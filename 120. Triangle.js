/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (var i = triangle.length - 2; i >= 0; i--) {
    var cur = triangle[i];
    for (var j = 0; j < cur.length; j++) {
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return triangle[0][0];
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]));