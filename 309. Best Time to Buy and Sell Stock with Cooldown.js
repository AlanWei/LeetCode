/**
 * @param {number[]} prices
 * @return {number}
 */
// recursion
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }
  var max = 0;
  var count = 0;
  var helper = function (curPrice, profit, idx, cooldown, ops) {
    if (idx === prices.length) {
      // console.log(ops);
      count++;
      if (profit > max) {
        return (max = profit);
      }
      return;
    }
    var today = prices[idx];
    if (cooldown) {
      helper(null, profit, idx + 1, false, ops.concat("cooldown"));
    } else {
      if (curPrice === null) {
        helper(today, profit, idx + 1, false, ops.concat("buy"));
        helper(curPrice, profit, idx + 1, false, ops.concat("hold"));
      } else {
        helper(
          null,
          profit + today - curPrice,
          idx + 1,
          true,
          ops.concat("sell")
        );
        helper(curPrice, profit, idx + 1, false, ops.concat("hold"));
      }
    }
  };

  helper(null, 0, 0, false, []);
  // console.log("count:", count);
  return max;
};

// state machine
var maxProfit = function (prices) {
  var noStock = 0;
  var inHand = -prices[0];
  var sold = 0;

  for (let i = 1; i < prices.length; i++) {
    inHand = Math.max(inHand, noStock - prices[i]);
    noStock = Math.max(noStock, sold);
    sold = Math.max(sold, inHand + prices[i]);
  }

  return sold;
};

// console.log(maxProfit([1, 2, 3, 0, 2]));
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));
// console.log(maxProfit([1, 2]));
// console.log(maxProfit([2, 1, 4]));
// console.log(maxProfit([1, 2, 4]));
