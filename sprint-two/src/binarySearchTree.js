var BinarySearchTree = function(value) {
  var binarySearchtree = Object.create(BinarySearchTreePrototype);
  binarySearchtree.value = value;
  binarySearchtree.left = {};
  binarySearchtree.right = {};
  return binarySearchtree;
};

BinarySearchTreePrototype = {};

BinarySearchTreePrototype.insert = function(value) {
  var rootNode = this;
  var newNode = BinarySearchTree(value);
  // var recurse = function(newNode) {
  //   if (rootNode.value === undefined) {
  //     rootNode.value = value;
  //   } else if (value < rootNode.value) {
  //     rootNode = rootNode.left;
  //     recurse(rootNode);
  //   }
  // };
  var recurse = function(newNode) {
    if (rootNode.value > newNode.value) {
      if (Object.keys(rootNode.left).length === 0) {
        rootNode.left = newNode;
      } else {
        rootNode = rootNode.left;
        recurse(newNode);
      }
    } else {
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

BinarySearchTreePrototype.depthFirstLog = function(func) {
  var rootNode = this;
  console.log(this);
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

/*
 * Complexity: What is the time complexity of the above functions?
 */















