var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods)
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var that = this;
  var findIt = function(target) {
    
    if (that.value === target) {
      return true;
    } else {
        for (let i = 0; i < that.children.length; i++) {
          return that.children[i].contains(target);
        } 
    } 
  } 
  
  return findIt(target) || false;
  
// return false;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
