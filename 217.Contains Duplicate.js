/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var temp = [];
  var result = (nums || []).some(n => {
    if (temp.indexOf(n) === -1) {
      temp.push(n);
    } else{
      return true;
    }
  });
  return result;
};