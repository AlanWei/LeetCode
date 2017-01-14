/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var arrayS = s.split('');
  var arrayT = t.split('');
  for (var i=0; i<arrayT.length; i++) {
    var index = arrayS.indexOf(arrayT[i]);
    if (index === -1) {
      return arrayT[i];
    } else {
      var left = arrayS.slice(0, index);
      var right = arrayS.slice(index + 1, arrayS.length);
      arrayS = left.concat(right);
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));