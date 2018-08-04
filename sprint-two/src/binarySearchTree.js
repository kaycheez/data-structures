var BinarySearchTree = function(value) {
  var binarySearchtree = Object.create(BinarySearchTreePrototype);

  binarySearchtree.value = value;
  binarySearchtree.left = {};
  binarySearchtree.right = {};
  binarySearchtree.depthLeft = 0;
  binarySearchtree.depthRight = 0;

  return binarySearchtree;
};

BinarySearchTreePrototype = {};

BinarySearchTreePrototype.isBalanced = function() {
  if (Math.abs(rootNode.depthLeft - rootNode.depthRight) > 2) {
    
  } 
};

BinarySearchTreePrototype.insert = function(value) {
  var rootNode = this;
  var newNode = BinarySearchTree(value);

  var recurse = function(newNode) {
    if (rootNode.value > newNode.value) {
      rootNode.depthLeft++;
      if (Object.keys(rootNode.left).length === 0) {
        rootNode.left = newNode;
      } else {
        rootNode = rootNode.left;
        recurse(newNode);
      }
    } else {
      rootNode.depthRight++;
      if (Object.keys(rootNode.right).length === 0) {
        rootNode.right = newNode;
      } else {
        rootNode = rootNode.right;
        recurse(newNode);
      }
    }
  };

  recurse(newNode);
  
};
//time complexity: O(log n)

BinarySearchTreePrototype.contains = function(value) {
  var result = false;
  var rootNode = this;

  var findIt = function(value) {
    if (rootNode.value === value) {
      result = true;
    } else if (rootNode.value > value && Object.keys(rootNode.left).length !== 0) {
      rootNode = rootNode.left;
      findIt(value);
    } else if (rootNode.value < value && Object.keys(rootNode.right).length !== 0) {
      rootNode = rootNode.right;
      findIt(value);
    }
  };

  findIt(value);

  return result;
};
//time complexity: O(log n)

BinarySearchTreePrototype.depthFirstLog = function(func) {
  var rootNode = this;

  var runIt = function(func) {
    func(rootNode.value);
    if (Object.keys(rootNode.left).length !== 0) {
      var temp = rootNode;
      rootNode = rootNode.left;
      runIt(func);
      rootNode = temp;
    } 
    if (Object.keys(rootNode.right).length !== 0) {
      var temp = rootNode;
      rootNode = rootNode.right;
      runIt(func);
      rootNode = temp;
    }
  };

  runIt(func);
};
//time complexity: O(n)

/*
 * Complexity: What is the time complexity of the above functions?
 */









