/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var obj = {};
  (nums || []).forEach(n => {
    if (obj[n] !== undefined) {
      obj[n] = obj[n] + 'a';
    } else {
      obj[n] = n;
    }
  });
  
  var keys = Object.keys(obj);
  for (var i=0; i<keys.length; i++) {
    if (obj[keys[i]] == keys[i]) {
      return obj[keys[i]];
    } 
  }
};