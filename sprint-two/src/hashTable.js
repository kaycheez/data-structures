

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];

  tuple.push(k);
  tuple.push(v);

  var bucket = this._storage.get(index) || [];
  if (bucket.length > 0) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  } else {
    bucket.push(tuple);
  }
  
  this._storage.set(index, bucket);
  
};
//time complexity: O(1)

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket.length > 0) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};
//time complexity: O(1)

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); 
  
  this._storage.each(function(v, i, c) {
    if (i === index) {
      for (let x = 0; x < v.length; x++) {
        if (v[x][0] === k) {
          v[x] = [];
        }
      }
    }
  });
};
//time complexity: O(n)


/*
 * Complexity: What is the time complexity of the above functions?
 */


