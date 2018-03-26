/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function compare(remain, add, need) {
  return remain + add >= need;
}

var canCompleteCircuit = function(gas, cost) {
  let remain = 0;
  const stations = gas.length;
  for (let i = 0; i < stations; i++) {
    let can = true;
    for (let j = 0; j < stations; j++) {
      const currentStation = i + j >= stations ? i + j -stations : i + j;
      const currentGas = gas[currentStation];
      const currentCost = cost[currentStation];
      if (compare(remain, currentGas, currentCost)) {
        remain = remain + currentGas - currentCost;
      } else {
        can = false;
        break;
      }
    }
    if (can) {
      return i;
    }
  }
  return -1;
};

console.log(canCompleteCircuit([4], [5]));
console.log(canCompleteCircuit([1,2], [2,1]));