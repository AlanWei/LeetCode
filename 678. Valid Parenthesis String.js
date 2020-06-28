/**
 * @param {string} s
 * @return {boolean}
 */

var helper = function (s, count) {
  if (count < 0) {
    return false;
  }
  if (s === "" && count > 0) {
    return false;
  }
  if (s === "" && count === 0) {
    return true;
  }
  var cur = s.charAt(0);
  switch (cur) {
    case "(":
      return helper(s.substring(1), count + 1);
    case ")":
      return helper(s.substring(1), count - 1);
    case "*":
      return (
        helper(s.substring(1), count + 1) ||
        helper(s.substring(1), count) ||
        helper(s.substring(1), count - 1)
      );
  }
};

var checkValidString = function (s) {
  return helper(s, 0);
};
