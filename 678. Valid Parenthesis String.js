/**
 * @param {string} s
 * @return {boolean}
 */

var helper = function (s, count, map) {
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
      return helper(s.substring(1), count + 1, map);
    case ")":
      return helper(s.substring(1), count - 1, map);
    case "*":
      return (
        helper(s.substring(1), count + 1, map) ||
        helper(s.substring(1), count, map) ||
        helper(s.substring(1), count - 1, map)
      );
  }
};

var checkValidString = function (s) {
  return helper(s, 0, {});
};
