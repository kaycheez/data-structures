var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};
//time complexity: O(1)

treeMethods.contains = function(target) {
  // var that = this;
  // var findIt = function(target) {
    
  //   if (that.value === target) {
  //     return true;
  //   } else {
  //       for (let i = 0; i < that.children.length; i++) {
  //         return that.children[i].contains(target);
  //       } 
  //   } 
  // } 
  
  // return findIt(target) || false;
  
// return false;
  var result = false;
  var findIt = function(target) {
    if (this.value === target) {
      result = true;
    } else if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        findIt.call(this.children[i], target);
      }
    }
  };
  findIt.call(this, target);
  
  return result;

};
//time complexity: O(n)





/*
 * Complexity: What is the time complexity of the above functions?
 */
