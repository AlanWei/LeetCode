/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var bits = convertToBits(num);
  for (var i=0; i<bits.length; i++) {
    if (bits[i] === 0) {
      bits[i] = 1;
    } else {
      bits[i] = 0;
    }
  }

  return bitsToInt(bits);
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

function bitsToInt(x) {
  var ro = 0;
  for (var i=0; i<x.length; i++) {
    ro += x[i] * (Math.pow(2, x.length - i - 1));
  }

  return ro;
}

console.log(findComplement(5));