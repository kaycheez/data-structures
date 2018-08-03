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
//time complexity: O(1)

  list.removeHead = function() {
    var removed = list.head.value;
    if (list.head.next === null) {
      list.head = null;
    } else {
      list.head = list.head.next;
    }

    return removed;
  };
//time complexity: O(1)

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};
//time complexity: O(n)

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
