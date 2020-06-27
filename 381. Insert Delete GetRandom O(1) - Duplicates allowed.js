/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.arr = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  var index = this.arr.indexOf(val);
  this.arr.push(val);
  return index === -1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  var index = this.arr.indexOf(val);
  if (index !== -1) {
    this.arr = this.arr.slice(0, index).concat(this.arr.slice(index + 1));
  }
  return !(index === -1);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  var random = getRandomInt(this.arr.length);
  return this.arr[random];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedCollection();
var param_1 = obj.insert(1);
var param_2 = obj.remove(2);
var param_3 = obj.insert(2);
var param_4 = obj.getRandom();
var param_5 = obj.remove(1);
var param_6 = obj.insert(2);
var param_7 = obj.getRandom();

console.log(obj, param_1, param_2, param_3, param_4, param_5, param_6, param_7);