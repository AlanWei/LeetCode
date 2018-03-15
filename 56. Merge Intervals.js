/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function check(obj1, obj2) {
  if (obj1 === undefined) {
    return [obj2];
  }
  if (obj1.end >= obj2.start) {
    return [new Interval(Math.min(obj1.start, obj2.start), Math.max(obj1.end, obj2.end))];
  }
  return [obj1, obj2];
}

var merge = function(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a.start - b.start);
  const ro = [];
  for (let i = 0; i < intervals.length; i++) {
    const newArr = check(ro[ro.length - 1], intervals[i]);
    newArr.length === 1 ? ro.pop() : null;
    ro.push(newArr[newArr.length - 1]);
  }
  // convert data structure
  const result = [];
  for (let i = 0; i < ro.length; i++) {
    result.push([ro[i].start, ro[i].end]);
  }

  return result;
};