/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var ro = [];
  for (var i = 1; i<=n; i++) {
    var mod3 = i % 3;
    var mod5 = i % 5;
    if (mod3 === 0 && mod5 === 0) {
      ro.push('FizzBuzz');
    } else if (mod3 === 0) {
      ro.push('Fizz');
    } else if (mod5 === 0) {
      ro.push('Buzz');
    } else {
      ro.push(i.toString());
    }
  }

  return ro;
};