var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addNode = function(value) {
    // var newNode = Node(value);
    // if (list.head === null && list.tail === null) {
    //   list.head = newNode;
    //   list.tail = newNode;
    // } else {
    //   list.tail.next = newNode;
    //   list.tail = newNode;
    // }
  };
  //time complexity: O(1)

  list.removeNode = function() {
    // var removed = list.head.value;
    // if (list.head.next === null) {
    //   list.head = null;
    // } else {
    //   list.head = list.head.next;
    // }

    // return removed;
  };
  //time complexity: O(1)

  list.contains = function(target) {
    // var current = list.head;
    // while (current !== null) {
    //   if (current.value === target) {
    //     return true;
    //   } else {
    //     current = current.next;
    //   }
    // }
    // return false;
  };

  return list;
};
//time complexity: O(n)

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
