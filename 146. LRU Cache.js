/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.queue = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    var cur = this.queue.indexOf(key);
    this.queue.splice(cur, 1);
    this.queue.push(key);
    return this.cache[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    var cur = this.queue.indexOf(key);
    this.queue.splice(cur, 1);
    this.queue.push(key);
    return (this.cache[key] = value);
  }
  if (this.queue.length === this.capacity) {
    var deleteKey = this.queue.shift();
    delete this.cache[deleteKey];
    this.queue.push(key);
    return (this.cache[key] = value);
  }
  this.queue.push(key);
  return (this.cache[key] = value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
