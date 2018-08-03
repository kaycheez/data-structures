

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this.getIndexBelowMaxForKey = function(str, max) {
  //   var hash = 0;
  //   for (var i = 0; i < str.length; i++) {
  //     hash = (hash << 5) + hash + str.charCodeAt(i);
  //     hash = hash & hash; // Convert to 32bit integer
  //     hash = Math.abs(hash);
  //   }
  //   return hash % max;
  // };
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];
  tuple.push(k);
  tuple.push(v);
  // var bucket = [];
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



/*
 * Complexity: What is the time complexity of the above functions?
 */


