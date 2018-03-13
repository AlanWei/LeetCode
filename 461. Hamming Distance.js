/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var xBits = convertToBits(x);
  var yBits = convertToBits(y);

  var ro = sameLength(xBits, yBits);
  var newX = ro.x;
  var newY = ro.y;
  var count = 0;

  for (var i = 0; i<newX.length; i++) {
    if (newX[i] !== newY[i]) {
      count++;
    }
  }

  return count;
};

var convertToBits = function(x) {
  var mod = x % 2;
  var rest = Math.floor(x / 2);
  var ro = [mod];
  while (rest > 0) {
    mod = rest % 2;
    rest = Math.floor(rest / 2);
    ro.unshift(mod);
  }

  return ro;
}

function sameLength(x, y) {
  while (x.length > y.length) {
    y.unshift(0);
  }
  while (y.length > x.length) {
    x.unshift(0);
  }

  return {
    x: x,
    y: y,
  }
}

console.log(hammingDistance(1, 4));