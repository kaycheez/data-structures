var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};
//time complexity: O(1)

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};
//time complexity: O(n)

setPrototype.remove = function(item) {
  delete this._storage[item];
};
//time complexity: O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
