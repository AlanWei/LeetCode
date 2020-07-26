/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }

  var keys = Object.keys(hash);
  var heap = [
    {
      key: keys[0],
      count: hash[keys[0]],
    },
  ];
  for (var i = 1; i < keys.length; i++) {
    var insert = false;
    var count = hash[keys[i]];
    if (count >= heap[0].count) {
      heap.unshift({
        key: keys[i],
        count: hash[keys[i]],
      });
    } else {
      for (var j = 1; j < heap.length; j++) {
        if (count >= heap[j].count) {
          heap.splice(j, 0, {
            key: keys[i],
            count: hash[keys[i]],
          });
          insert = true;
          break;
        }
      }
      if (!insert) {
        heap.push({
          key: keys[i],
          count: hash[keys[i]],
        });
      }
    }
  }

  heap = heap.slice(0, k);
  var result = [];

  for (var i = 0; i < heap.length; i++) {
    result.push(heap[i].key);
  }

  return result;
};
