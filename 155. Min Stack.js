/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minIndex = 0;
  return;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  var obj = {
    val: x,
    minIndex: this.minIndex,
  }
  this.stack.push(obj);
  if (x < this.stack[this.minIndex].val) {
    this.minIndex = this.stack.length - 1;
  }
  return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  var last = this.stack.pop();
  this.minIndex = last.minIndex;
  return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.minIndex].val;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
