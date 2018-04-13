/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  const helper = (candidates, target, current, start) => {
    if (target === 0) {
      return result.push(current);
    }
    
    for (let i = start; i < candidates.length; i++) {
      const newTarget = target - candidates[i];
      if (newTarget >= 0) {
        helper(candidates, target - candidates[i], current.concat(candidates[i]), i);
      }
    }
  }

  helper(candidates, target, [], 0);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));