/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");
    if (map[sorted] === undefined) {
      map[sorted] = [strs[i]];
    } else {
      map[sorted].push(strs[i]);
    }
  }

  const keys = Object.keys(map);
  const ro = [];
  for (let i = 0; i < keys.length; i++) {
    ro.push(map[keys[i]]);
  }

  return ro;
};