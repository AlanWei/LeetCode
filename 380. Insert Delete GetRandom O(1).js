/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.arr.indexOf(val) === -1) {
    this.arr.push(val);
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.arr.indexOf(val) === -1) {
    return false;
  }
  var index = this.arr.indexOf(val);
  this.arr = this.arr.slice(0, index).concat(this.arr.slice(index + 1));
  return true;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  var random = getRandomInt(this.arr.length);
  return this.arr[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_2 = obj.remove(2);
var param_3 = obj.insert(2);
var param_4 = obj.getRandom();
var param_5 = obj.remove(1);
var param_6 = obj.insert(2);
var param_7 = obj.getRandom();

console.log(obj, param_1, param_2, param_3, param_4, param_5, param_6, param_7);