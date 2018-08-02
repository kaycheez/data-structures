var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
    // console.log("this is Node(value: " + Node(value));
    // console.log("this is tail's next: " + list.tail.next);
      list.tail = newNode;
    }
    
    
  };

  list.removeHead = function() {
    var removed = list.head.value;
    if (list.head.next === null) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }
    return removed;
  };

  list.contains = function(target) {
   for (var key in list) {
     if (list[key].value === target) {
       return true;
     }
   }
   return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
