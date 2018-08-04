var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var newTail = function(newNode) {
    list.tail.next = newNode;
    newNode.previous = list.tail;
    list.tail = newNode;  
  };

  list.addNode = function(value, afterValue) {
    var newNode = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (afterValue) {
      var currentNode = list.head;

      while (currentNode !== null) {
        if (currentNode.value === afterValue) {
          if (currentNode.next !== null) {
            currentNode.next.previous = newNode;
            newNode.next = currentNode.next;
          }
          currentNode.next = newNode;
          newNode.previous = currentNode;
          currentNode = null;
        } else {
          currentNode = currentNode.next;
        }       
      }
      if (!list.contains(newNode.value)) {
        newTail(newNode);  
      }     
    } else {
      newTail(newNode);  
    }
  };
  //time complexity: O(1)

  list.removeNode = function(value) {
    var removed;
    
    if (list.head !== null) {
      if (value) {
        var currentNode = list.head;
        while (currentNode !== null) {
          if (currentNode.value === value) {
            removed = currentNode.value;
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode = null;
          } else {
            currentNode = currentNode.next;
          }
        }
      } else {
        removed = list.head.value;
        if (list.head.next === null) {
          list.head = null;
        } else {
          list.head = list.head.next;
          list.head.previous = null;
        }
      }
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
  node.previous = null;

  return node;
};
