/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  var x = 0;
  var y = 0;
  var map = {
    '00': true,
  };

  for (var i = 0; i < path.length; i++) {
    switch (path[i]) {
      case 'N':
        y = y + 1;
        break;
      case 'S':
        y = y - 1;
        break;
      case 'E':
        x = x + 1;
        break;
      case 'W':
        x = x - 1;
        break;
    }
    if (map[`${x}${y}`]) {
      return true;
    }
    map[`${x}${y}`] = true;
  }
  
  return false;
};