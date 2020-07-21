/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++) {
      var profit = prices[j] - prices[i];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max;
};

var maxProfit = function(prices) {
  var max = 0;
  var min = prices[0];
  for (var i = 1; i < prices.length; i++) {
    var max = Math.max(max, prices[i] - min);
    var min = Math.min(min, prices[i]);
  }

  return max;
};